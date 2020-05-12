/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssignTeamGoalRequestBuilder } from './AssignTeamGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AssignTeamGoal" of service "SFOData".
 */
export class AssignTeamGoal extends Entity implements AssignTeamGoalType {
  /**
   * Technical entity name for AssignTeamGoal.
   */
  static _entityName = 'AssignTeamGoal';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AssignTeamGoal.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * userId.
   * @nullable
   */
  userId?: string;

  /**
   * Returns an entity builder to construct instances `AssignTeamGoal`.
   * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
   */
  static builder(): EntityBuilderType<AssignTeamGoal, AssignTeamGoalTypeForceMandatory> {
    return Entity.entityBuilder(AssignTeamGoal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AssignTeamGoal` entity type.
   * @returns A `AssignTeamGoal` request builder.
   */
  static requestBuilder(): AssignTeamGoalRequestBuilder {
    return new AssignTeamGoalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssignTeamGoal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
   */
  static customField(fieldName: string): CustomField<AssignTeamGoal> {
    return Entity.customFieldSelector(fieldName, AssignTeamGoal);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AssignTeamGoalType {
  id: BigNumber;
  userId?: string;
}

export interface AssignTeamGoalTypeForceMandatory {
  id: BigNumber;
  userId: string;
}

export namespace AssignTeamGoal {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<AssignTeamGoal> = new BigNumberField('id', AssignTeamGoal, 'Edm.Int64');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<AssignTeamGoal> = new StringField('userId', AssignTeamGoal, 'Edm.String');
  /**
   * All fields of the AssignTeamGoal entity.
   */
  export const _allFields: Array<BigNumberField<AssignTeamGoal> | StringField<AssignTeamGoal>> = [
    AssignTeamGoal.ID,
    AssignTeamGoal.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AssignTeamGoal> = new AllFields('*', AssignTeamGoal);
  /**
   * All key fields of the AssignTeamGoal entity.
   */
  export const _keyFields: Array<Selectable<AssignTeamGoal>> = [AssignTeamGoal.ID];
  /**
   * Mapping of all key field names to the respective static field property AssignTeamGoal.
   */
  export const _keys: { [keys: string]: Selectable<AssignTeamGoal> } = AssignTeamGoal._keyFields.reduce((acc: { [keys: string]: Selectable<AssignTeamGoal> }, field: Selectable<AssignTeamGoal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
