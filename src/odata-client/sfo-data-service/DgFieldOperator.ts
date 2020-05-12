/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DgFieldOperatorRequestBuilder } from './DgFieldOperatorRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DGFieldOperator" of service "SFOData".
 */
export class DgFieldOperator extends Entity implements DgFieldOperatorType {
  /**
   * Technical entity name for DgFieldOperator.
   */
  static _entityName = 'DGFieldOperator';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DgFieldOperator.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * label.
   * Maximum length: 200.
   */
  label!: string;
  /**
   * token.
   * Maximum length: 200.
   */
  token!: string;

  /**
   * Returns an entity builder to construct instances `DgFieldOperator`.
   * @returns A builder that constructs instances of entity type `DgFieldOperator`.
   */
  static builder(): EntityBuilderType<DgFieldOperator, DgFieldOperatorTypeForceMandatory> {
    return Entity.entityBuilder(DgFieldOperator);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DgFieldOperator` entity type.
   * @returns A `DgFieldOperator` request builder.
   */
  static requestBuilder(): DgFieldOperatorRequestBuilder {
    return new DgFieldOperatorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFieldOperator`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DgFieldOperator`.
   */
  static customField(fieldName: string): CustomField<DgFieldOperator> {
    return Entity.customFieldSelector(fieldName, DgFieldOperator);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DgFieldOperatorType {
  label: string;
  token: string;
}

export interface DgFieldOperatorTypeForceMandatory {
  label: string;
  token: string;
}

export namespace DgFieldOperator {
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<DgFieldOperator> = new StringField('label', DgFieldOperator, 'Edm.String');
  /**
   * Static representation of the [[token]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOKEN: StringField<DgFieldOperator> = new StringField('token', DgFieldOperator, 'Edm.String');
  /**
   * All fields of the DgFieldOperator entity.
   */
  export const _allFields: Array<StringField<DgFieldOperator>> = [
    DgFieldOperator.LABEL,
    DgFieldOperator.TOKEN
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DgFieldOperator> = new AllFields('*', DgFieldOperator);
  /**
   * All key fields of the DgFieldOperator entity.
   */
  export const _keyFields: Array<Selectable<DgFieldOperator>> = [DgFieldOperator.TOKEN];
  /**
   * Mapping of all key field names to the respective static field property DgFieldOperator.
   */
  export const _keys: { [keys: string]: Selectable<DgFieldOperator> } = DgFieldOperator._keyFields.reduce((acc: { [keys: string]: Selectable<DgFieldOperator> }, field: Selectable<DgFieldOperator>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
