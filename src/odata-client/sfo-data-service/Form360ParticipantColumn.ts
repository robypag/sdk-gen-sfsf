/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ParticipantColumnRequestBuilder } from './Form360ParticipantColumnRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360ParticipantColumn" of service "SFOData".
 */
export class Form360ParticipantColumn extends Entity implements Form360ParticipantColumnType {
  /**
   * Technical entity name for Form360ParticipantColumn.
   */
  static _entityName = 'Form360ParticipantColumn';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360ParticipantColumn.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * columnKey.
   */
  columnKey!: string;
  /**
   * columnLabel.
   * @nullable
   */
  columnLabel?: string;
  /**
   * columnOrder.
   * @nullable
   */
  columnOrder?: number;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `Form360ParticipantColumn`.
   * @returns A builder that constructs instances of entity type `Form360ParticipantColumn`.
   */
  static builder(): EntityBuilderType<Form360ParticipantColumn, Form360ParticipantColumnTypeForceMandatory> {
    return Entity.entityBuilder(Form360ParticipantColumn);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360ParticipantColumn` entity type.
   * @returns A `Form360ParticipantColumn` request builder.
   */
  static requestBuilder(): Form360ParticipantColumnRequestBuilder {
    return new Form360ParticipantColumnRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantColumn`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360ParticipantColumn`.
   */
  static customField(fieldName: string): CustomField<Form360ParticipantColumn> {
    return Entity.customFieldSelector(fieldName, Form360ParticipantColumn);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Form360ParticipantColumnType {
  columnKey: string;
  columnLabel?: string;
  columnOrder?: number;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export interface Form360ParticipantColumnTypeForceMandatory {
  columnKey: string;
  columnLabel: string;
  columnOrder: number;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export namespace Form360ParticipantColumn {
  /**
   * Static representation of the [[columnKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN_KEY: StringField<Form360ParticipantColumn> = new StringField('columnKey', Form360ParticipantColumn, 'Edm.String');
  /**
   * Static representation of the [[columnLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN_LABEL: StringField<Form360ParticipantColumn> = new StringField('columnLabel', Form360ParticipantColumn, 'Edm.String');
  /**
   * Static representation of the [[columnOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLUMN_ORDER: NumberField<Form360ParticipantColumn> = new NumberField('columnOrder', Form360ParticipantColumn, 'Edm.Int32');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360ParticipantColumn> = new BigNumberField('formContentId', Form360ParticipantColumn, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360ParticipantColumn> = new BigNumberField('formDataId', Form360ParticipantColumn, 'Edm.Int64');
  /**
   * All fields of the Form360ParticipantColumn entity.
   */
  export const _allFields: Array<StringField<Form360ParticipantColumn> | NumberField<Form360ParticipantColumn> | BigNumberField<Form360ParticipantColumn>> = [
    Form360ParticipantColumn.COLUMN_KEY,
    Form360ParticipantColumn.COLUMN_LABEL,
    Form360ParticipantColumn.COLUMN_ORDER,
    Form360ParticipantColumn.FORM_CONTENT_ID,
    Form360ParticipantColumn.FORM_DATA_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360ParticipantColumn> = new AllFields('*', Form360ParticipantColumn);
  /**
   * All key fields of the Form360ParticipantColumn entity.
   */
  export const _keyFields: Array<Selectable<Form360ParticipantColumn>> = [Form360ParticipantColumn.COLUMN_KEY, Form360ParticipantColumn.FORM_CONTENT_ID, Form360ParticipantColumn.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360ParticipantColumn.
   */
  export const _keys: { [keys: string]: Selectable<Form360ParticipantColumn> } = Form360ParticipantColumn._keyFields.reduce((acc: { [keys: string]: Selectable<Form360ParticipantColumn> }, field: Selectable<Form360ParticipantColumn>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
