/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DgFieldRequestBuilder } from './DgFieldRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DGField" of service "SFOData".
 */
export class DgField extends Entity implements DgFieldType {
  /**
   * Technical entity name for DgField.
   */
  static _entityName = 'DGField';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DgField.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * dataType.
   * Maximum length: 200.
   */
  dataType!: string;
  /**
   * label.
   * Maximum length: 200.
   */
  label!: string;
  /**
   * name.
   * Maximum length: 200.
   */
  name!: string;
  /**
   * picklistId.
   * Maximum length: 200.
   */
  picklistId!: string;
  /**
   * One-to-many navigation property to the [[DgFieldOperator]] entity.
   */
  allowedOperators!: DgFieldOperator[];

  /**
   * Returns an entity builder to construct instances `DgField`.
   * @returns A builder that constructs instances of entity type `DgField`.
   */
  static builder(): EntityBuilderType<DgField, DgFieldTypeForceMandatory> {
    return Entity.entityBuilder(DgField);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DgField` entity type.
   * @returns A `DgField` request builder.
   */
  static requestBuilder(): DgFieldRequestBuilder {
    return new DgFieldRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgField`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DgField`.
   */
  static customField(fieldName: string): CustomField<DgField> {
    return Entity.customFieldSelector(fieldName, DgField);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { DgFieldOperator, DgFieldOperatorType } from './DgFieldOperator';

export interface DgFieldType {
  dataType: string;
  label: string;
  name: string;
  picklistId: string;
  allowedOperators: DgFieldOperatorType[];
}

export interface DgFieldTypeForceMandatory {
  dataType: string;
  label: string;
  name: string;
  picklistId: string;
  allowedOperators: DgFieldOperatorType[];
}

export namespace DgField {
  /**
   * Static representation of the [[dataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_TYPE: StringField<DgField> = new StringField('dataType', DgField, 'Edm.String');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<DgField> = new StringField('label', DgField, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<DgField> = new StringField('name', DgField, 'Edm.String');
  /**
   * Static representation of the [[picklistId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_ID: StringField<DgField> = new StringField('picklistId', DgField, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[allowedOperators]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_OPERATORS: Link<DgField, DgFieldOperator> = new Link('allowedOperators', DgField, DgFieldOperator);
  /**
   * All fields of the DgField entity.
   */
  export const _allFields: Array<StringField<DgField> | Link<DgField, DgFieldOperator>> = [
    DgField.DATA_TYPE,
    DgField.LABEL,
    DgField.NAME,
    DgField.PICKLIST_ID,
    DgField.ALLOWED_OPERATORS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DgField> = new AllFields('*', DgField);
  /**
   * All key fields of the DgField entity.
   */
  export const _keyFields: Array<Selectable<DgField>> = [DgField.NAME];
  /**
   * Mapping of all key field names to the respective static field property DgField.
   */
  export const _keys: { [keys: string]: Selectable<DgField> } = DgField._keyFields.reduce((acc: { [keys: string]: Selectable<DgField> }, field: Selectable<DgField>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
