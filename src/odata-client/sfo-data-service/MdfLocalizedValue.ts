/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MdfLocalizedValueRequestBuilder } from './MdfLocalizedValueRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MDFLocalizedValue" of service "SFOData".
 */
export class MdfLocalizedValue extends Entity implements MdfLocalizedValueType {
  /**
   * Technical entity name for MdfLocalizedValue.
   */
  static _entityName = 'MDFLocalizedValue';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MdfLocalizedValue.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * locale.
   */
  locale!: string;
  /**
   * value.
   * @nullable
   */
  value?: string;

  /**
   * Returns an entity builder to construct instances `MdfLocalizedValue`.
   * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
   */
  static builder(): EntityBuilderType<MdfLocalizedValue, MdfLocalizedValueTypeForceMandatory> {
    return Entity.entityBuilder(MdfLocalizedValue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MdfLocalizedValue` entity type.
   * @returns A `MdfLocalizedValue` request builder.
   */
  static requestBuilder(): MdfLocalizedValueRequestBuilder {
    return new MdfLocalizedValueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfLocalizedValue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
   */
  static customField(fieldName: string): CustomField<MdfLocalizedValue> {
    return Entity.customFieldSelector(fieldName, MdfLocalizedValue);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MdfLocalizedValueType {
  locale: string;
  value?: string;
}

export interface MdfLocalizedValueTypeForceMandatory {
  locale: string;
  value: string;
}

export namespace MdfLocalizedValue {
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<MdfLocalizedValue> = new StringField('locale', MdfLocalizedValue, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<MdfLocalizedValue> = new StringField('value', MdfLocalizedValue, 'Edm.String');
  /**
   * All fields of the MdfLocalizedValue entity.
   */
  export const _allFields: Array<StringField<MdfLocalizedValue>> = [
    MdfLocalizedValue.LOCALE,
    MdfLocalizedValue.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MdfLocalizedValue> = new AllFields('*', MdfLocalizedValue);
  /**
   * All key fields of the MdfLocalizedValue entity.
   */
  export const _keyFields: Array<Selectable<MdfLocalizedValue>> = [MdfLocalizedValue.LOCALE];
  /**
   * Mapping of all key field names to the respective static field property MdfLocalizedValue.
   */
  export const _keys: { [keys: string]: Selectable<MdfLocalizedValue> } = MdfLocalizedValue._keyFields.reduce((acc: { [keys: string]: Selectable<MdfLocalizedValue> }, field: Selectable<MdfLocalizedValue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
