/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalEnumRequestBuilder } from './GoalEnumRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalEnum" of service "SFOData".
 */
export class GoalEnum extends Entity implements GoalEnumType {
  /**
   * Technical entity name for GoalEnum.
   */
  static _entityName = 'GoalEnum';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalEnum.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * fieldId.
   */
  fieldId!: string;
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * planId.
   */
  planId!: BigNumber;
  /**
   * value.
   */
  value!: string;

  /**
   * Returns an entity builder to construct instances `GoalEnum`.
   * @returns A builder that constructs instances of entity type `GoalEnum`.
   */
  static builder(): EntityBuilderType<GoalEnum, GoalEnumTypeForceMandatory> {
    return Entity.entityBuilder(GoalEnum);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalEnum` entity type.
   * @returns A `GoalEnum` request builder.
   */
  static requestBuilder(): GoalEnumRequestBuilder {
    return new GoalEnumRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalEnum`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalEnum`.
   */
  static customField(fieldName: string): CustomField<GoalEnum> {
    return Entity.customFieldSelector(fieldName, GoalEnum);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalEnumType {
  fieldId: string;
  label?: string;
  planId: BigNumber;
  value: string;
}

export interface GoalEnumTypeForceMandatory {
  fieldId: string;
  label: string;
  planId: BigNumber;
  value: string;
}

export namespace GoalEnum {
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<GoalEnum> = new StringField('fieldId', GoalEnum, 'Edm.String');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<GoalEnum> = new StringField('label', GoalEnum, 'Edm.String');
  /**
   * Static representation of the [[planId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_ID: BigNumberField<GoalEnum> = new BigNumberField('planId', GoalEnum, 'Edm.Int64');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<GoalEnum> = new StringField('value', GoalEnum, 'Edm.String');
  /**
   * All fields of the GoalEnum entity.
   */
  export const _allFields: Array<StringField<GoalEnum> | BigNumberField<GoalEnum>> = [
    GoalEnum.FIELD_ID,
    GoalEnum.LABEL,
    GoalEnum.PLAN_ID,
    GoalEnum.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalEnum> = new AllFields('*', GoalEnum);
  /**
   * All key fields of the GoalEnum entity.
   */
  export const _keyFields: Array<Selectable<GoalEnum>> = [GoalEnum.FIELD_ID, GoalEnum.PLAN_ID, GoalEnum.VALUE];
  /**
   * Mapping of all key field names to the respective static field property GoalEnum.
   */
  export const _keys: { [keys: string]: Selectable<GoalEnum> } = GoalEnum._keyFields.reduce((acc: { [keys: string]: Selectable<GoalEnum> }, field: Selectable<GoalEnum>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
