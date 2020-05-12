/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalEnumRequestBuilder } from './DevGoalEnumRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalEnum" of service "SFOData".
 */
export class DevGoalEnum extends Entity implements DevGoalEnumType {
  /**
   * Technical entity name for DevGoalEnum.
   */
  static _entityName = 'DevGoalEnum';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalEnum.
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
   * Returns an entity builder to construct instances `DevGoalEnum`.
   * @returns A builder that constructs instances of entity type `DevGoalEnum`.
   */
  static builder(): EntityBuilderType<DevGoalEnum, DevGoalEnumTypeForceMandatory> {
    return Entity.entityBuilder(DevGoalEnum);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalEnum` entity type.
   * @returns A `DevGoalEnum` request builder.
   */
  static requestBuilder(): DevGoalEnumRequestBuilder {
    return new DevGoalEnumRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalEnum`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalEnum`.
   */
  static customField(fieldName: string): CustomField<DevGoalEnum> {
    return Entity.customFieldSelector(fieldName, DevGoalEnum);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DevGoalEnumType {
  fieldId: string;
  label?: string;
  planId: BigNumber;
  value: string;
}

export interface DevGoalEnumTypeForceMandatory {
  fieldId: string;
  label: string;
  planId: BigNumber;
  value: string;
}

export namespace DevGoalEnum {
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<DevGoalEnum> = new StringField('fieldId', DevGoalEnum, 'Edm.String');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<DevGoalEnum> = new StringField('label', DevGoalEnum, 'Edm.String');
  /**
   * Static representation of the [[planId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_ID: BigNumberField<DevGoalEnum> = new BigNumberField('planId', DevGoalEnum, 'Edm.Int64');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<DevGoalEnum> = new StringField('value', DevGoalEnum, 'Edm.String');
  /**
   * All fields of the DevGoalEnum entity.
   */
  export const _allFields: Array<StringField<DevGoalEnum> | BigNumberField<DevGoalEnum>> = [
    DevGoalEnum.FIELD_ID,
    DevGoalEnum.LABEL,
    DevGoalEnum.PLAN_ID,
    DevGoalEnum.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalEnum> = new AllFields('*', DevGoalEnum);
  /**
   * All key fields of the DevGoalEnum entity.
   */
  export const _keyFields: Array<Selectable<DevGoalEnum>> = [DevGoalEnum.FIELD_ID, DevGoalEnum.PLAN_ID, DevGoalEnum.VALUE];
  /**
   * Mapping of all key field names to the respective static field property DevGoalEnum.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalEnum> } = DevGoalEnum._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalEnum> }, field: Selectable<DevGoalEnum>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
