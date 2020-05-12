/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormCustomElementListValueRequestBuilder } from './FormCustomElementListValueRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormCustomElementListValue" of service "SFOData".
 */
export class FormCustomElementListValue extends Entity implements FormCustomElementListValueType {
  /**
   * Technical entity name for FormCustomElementListValue.
   */
  static _entityName = 'FormCustomElementListValue';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormCustomElementListValue.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * elementKey.
   */
  elementKey!: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * listIndex.
   * @nullable
   */
  listIndex?: number;
  /**
   * name.
   */
  name!: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * selected.
   * @nullable
   */
  selected?: boolean;
  /**
   * value.
   * @nullable
   */
  value?: string;

  /**
   * Returns an entity builder to construct instances `FormCustomElementListValue`.
   * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
   */
  static builder(): EntityBuilderType<FormCustomElementListValue, FormCustomElementListValueTypeForceMandatory> {
    return Entity.entityBuilder(FormCustomElementListValue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormCustomElementListValue` entity type.
   * @returns A `FormCustomElementListValue` request builder.
   */
  static requestBuilder(): FormCustomElementListValueRequestBuilder {
    return new FormCustomElementListValueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElementListValue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
   */
  static customField(fieldName: string): CustomField<FormCustomElementListValue> {
    return Entity.customFieldSelector(fieldName, FormCustomElementListValue);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormCustomElementListValueType {
  elementKey: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  listIndex?: number;
  name: string;
  sectionIndex: number;
  selected?: boolean;
  value?: string;
}

export interface FormCustomElementListValueTypeForceMandatory {
  elementKey: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  listIndex: number;
  name: string;
  sectionIndex: number;
  selected: boolean;
  value: string;
}

export namespace FormCustomElementListValue {
  /**
   * Static representation of the [[elementKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEMENT_KEY: StringField<FormCustomElementListValue> = new StringField('elementKey', FormCustomElementListValue, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormCustomElementListValue> = new BigNumberField('formContentId', FormCustomElementListValue, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormCustomElementListValue> = new BigNumberField('formDataId', FormCustomElementListValue, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormCustomElementListValue> = new BigNumberField('itemId', FormCustomElementListValue, 'Edm.Int64');
  /**
   * Static representation of the [[listIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIST_INDEX: NumberField<FormCustomElementListValue> = new NumberField('listIndex', FormCustomElementListValue, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FormCustomElementListValue> = new StringField('name', FormCustomElementListValue, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormCustomElementListValue> = new NumberField('sectionIndex', FormCustomElementListValue, 'Edm.Int32');
  /**
   * Static representation of the [[selected]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELECTED: BooleanField<FormCustomElementListValue> = new BooleanField('selected', FormCustomElementListValue, 'Edm.Boolean');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<FormCustomElementListValue> = new StringField('value', FormCustomElementListValue, 'Edm.String');
  /**
   * All fields of the FormCustomElementListValue entity.
   */
  export const _allFields: Array<StringField<FormCustomElementListValue> | BigNumberField<FormCustomElementListValue> | NumberField<FormCustomElementListValue> | BooleanField<FormCustomElementListValue>> = [
    FormCustomElementListValue.ELEMENT_KEY,
    FormCustomElementListValue.FORM_CONTENT_ID,
    FormCustomElementListValue.FORM_DATA_ID,
    FormCustomElementListValue.ITEM_ID,
    FormCustomElementListValue.LIST_INDEX,
    FormCustomElementListValue.NAME,
    FormCustomElementListValue.SECTION_INDEX,
    FormCustomElementListValue.SELECTED,
    FormCustomElementListValue.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormCustomElementListValue> = new AllFields('*', FormCustomElementListValue);
  /**
   * All key fields of the FormCustomElementListValue entity.
   */
  export const _keyFields: Array<Selectable<FormCustomElementListValue>> = [FormCustomElementListValue.ELEMENT_KEY, FormCustomElementListValue.FORM_CONTENT_ID, FormCustomElementListValue.FORM_DATA_ID, FormCustomElementListValue.ITEM_ID, FormCustomElementListValue.NAME, FormCustomElementListValue.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormCustomElementListValue.
   */
  export const _keys: { [keys: string]: Selectable<FormCustomElementListValue> } = FormCustomElementListValue._keyFields.reduce((acc: { [keys: string]: Selectable<FormCustomElementListValue> }, field: Selectable<FormCustomElementListValue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
