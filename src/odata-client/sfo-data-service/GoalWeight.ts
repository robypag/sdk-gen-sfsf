/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalWeightRequestBuilder } from './GoalWeightRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalWeight" of service "SFOData".
 */
export class GoalWeight extends Entity implements GoalWeightType {
  /**
   * Technical entity name for GoalWeight.
   */
  static _entityName = 'GoalWeight';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalWeight.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * maxValue.
   * @nullable
   */
  maxValue?: number;
  /**
   * minValue.
   * @nullable
   */
  minValue?: number;
  /**
   * planId.
   */
  planId!: BigNumber;
  /**
   * type.
   */
  type!: string;

  /**
   * Returns an entity builder to construct instances `GoalWeight`.
   * @returns A builder that constructs instances of entity type `GoalWeight`.
   */
  static builder(): EntityBuilderType<GoalWeight, GoalWeightTypeForceMandatory> {
    return Entity.entityBuilder(GoalWeight);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalWeight` entity type.
   * @returns A `GoalWeight` request builder.
   */
  static requestBuilder(): GoalWeightRequestBuilder {
    return new GoalWeightRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalWeight`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalWeight`.
   */
  static customField(fieldName: string): CustomField<GoalWeight> {
    return Entity.customFieldSelector(fieldName, GoalWeight);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalWeightType {
  maxValue?: number;
  minValue?: number;
  planId: BigNumber;
  type: string;
}

export interface GoalWeightTypeForceMandatory {
  maxValue: number;
  minValue: number;
  planId: BigNumber;
  type: string;
}

export namespace GoalWeight {
  /**
   * Static representation of the [[maxValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_VALUE: NumberField<GoalWeight> = new NumberField('maxValue', GoalWeight, 'Edm.Double');
  /**
   * Static representation of the [[minValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_VALUE: NumberField<GoalWeight> = new NumberField('minValue', GoalWeight, 'Edm.Double');
  /**
   * Static representation of the [[planId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_ID: BigNumberField<GoalWeight> = new BigNumberField('planId', GoalWeight, 'Edm.Int64');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<GoalWeight> = new StringField('type', GoalWeight, 'Edm.String');
  /**
   * All fields of the GoalWeight entity.
   */
  export const _allFields: Array<NumberField<GoalWeight> | BigNumberField<GoalWeight> | StringField<GoalWeight>> = [
    GoalWeight.MAX_VALUE,
    GoalWeight.MIN_VALUE,
    GoalWeight.PLAN_ID,
    GoalWeight.TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalWeight> = new AllFields('*', GoalWeight);
  /**
   * All key fields of the GoalWeight entity.
   */
  export const _keyFields: Array<Selectable<GoalWeight>> = [GoalWeight.PLAN_ID, GoalWeight.TYPE];
  /**
   * Mapping of all key field names to the respective static field property GoalWeight.
   */
  export const _keys: { [keys: string]: Selectable<GoalWeight> } = GoalWeight._keyFields.reduce((acc: { [keys: string]: Selectable<GoalWeight> }, field: Selectable<GoalWeight>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
