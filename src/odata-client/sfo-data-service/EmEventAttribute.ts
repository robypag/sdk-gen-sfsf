/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmEventAttributeRequestBuilder } from './EmEventAttributeRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EMEventAttribute" of service "SFOData".
 */
export class EmEventAttribute extends Entity implements EmEventAttributeType {
  /**
   * Technical entity name for EmEventAttribute.
   */
  static _entityName = 'EMEventAttribute';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmEventAttribute.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Id.
   */
  id!: BigNumber;
  /**
   * Name.
   */
  name!: string;
  /**
   * Value.
   * @nullable
   */
  value?: string;

  /**
   * Returns an entity builder to construct instances `EmEventAttribute`.
   * @returns A builder that constructs instances of entity type `EmEventAttribute`.
   */
  static builder(): EntityBuilderType<EmEventAttribute, EmEventAttributeTypeForceMandatory> {
    return Entity.entityBuilder(EmEventAttribute);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmEventAttribute` entity type.
   * @returns A `EmEventAttribute` request builder.
   */
  static requestBuilder(): EmEventAttributeRequestBuilder {
    return new EmEventAttributeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEventAttribute`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmEventAttribute`.
   */
  static customField(fieldName: string): CustomField<EmEventAttribute> {
    return Entity.customFieldSelector(fieldName, EmEventAttribute);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EmEventAttributeType {
  id: BigNumber;
  name: string;
  value?: string;
}

export interface EmEventAttributeTypeForceMandatory {
  id: BigNumber;
  name: string;
  value: string;
}

export namespace EmEventAttribute {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<EmEventAttribute> = new BigNumberField('id', EmEventAttribute, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<EmEventAttribute> = new StringField('name', EmEventAttribute, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<EmEventAttribute> = new StringField('value', EmEventAttribute, 'Edm.String');
  /**
   * All fields of the EmEventAttribute entity.
   */
  export const _allFields: Array<BigNumberField<EmEventAttribute> | StringField<EmEventAttribute>> = [
    EmEventAttribute.ID,
    EmEventAttribute.NAME,
    EmEventAttribute.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmEventAttribute> = new AllFields('*', EmEventAttribute);
  /**
   * All key fields of the EmEventAttribute entity.
   */
  export const _keyFields: Array<Selectable<EmEventAttribute>> = [EmEventAttribute.ID];
  /**
   * Mapping of all key field names to the respective static field property EmEventAttribute.
   */
  export const _keys: { [keys: string]: Selectable<EmEventAttribute> } = EmEventAttribute._keyFields.reduce((acc: { [keys: string]: Selectable<EmEventAttribute> }, field: Selectable<EmEventAttribute>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
