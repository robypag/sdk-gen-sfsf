/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormCustomElementRequestBuilder } from './FormCustomElementRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormCustomElement" of service "SFOData".
 */
export class FormCustomElement extends Entity implements FormCustomElementType {
  /**
   * Technical entity name for FormCustomElement.
   */
  static _entityName = 'FormCustomElement';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormCustomElement.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * checked.
   * @nullable
   */
  checked?: boolean;
  /**
   * dateFormat.
   * @nullable
   */
  dateFormat?: string;
  /**
   * editable.
   * @nullable
   */
  editable?: boolean;
  /**
   * elementIndex.
   * @nullable
   */
  elementIndex?: number;
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
   * maximumValue.
   * @nullable
   */
  maximumValue?: number;
  /**
   * minimumValue.
   * @nullable
   */
  minimumValue?: number;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * required.
   * @nullable
   */
  required?: boolean;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * textMaximumLength.
   * @nullable
   */
  textMaximumLength?: number;
  /**
   * textSize.
   * @nullable
   */
  textSize?: number;
  /**
   * type.
   * @nullable
   */
  type?: string;
  /**
   * value.
   * @nullable
   */
  value?: string;
  /**
   * valueKey.
   * @nullable
   */
  valueKey?: string;
  /**
   * writingAssistant.
   * @nullable
   */
  writingAssistant?: boolean;
  /**
   * One-to-many navigation property to the [[FormCustomElementListValue]] entity.
   */
  elementListValues!: FormCustomElementListValue[];

  /**
   * Returns an entity builder to construct instances `FormCustomElement`.
   * @returns A builder that constructs instances of entity type `FormCustomElement`.
   */
  static builder(): EntityBuilderType<FormCustomElement, FormCustomElementTypeForceMandatory> {
    return Entity.entityBuilder(FormCustomElement);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormCustomElement` entity type.
   * @returns A `FormCustomElement` request builder.
   */
  static requestBuilder(): FormCustomElementRequestBuilder {
    return new FormCustomElementRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElement`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormCustomElement`.
   */
  static customField(fieldName: string): CustomField<FormCustomElement> {
    return Entity.customFieldSelector(fieldName, FormCustomElement);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCustomElementListValue, FormCustomElementListValueType } from './FormCustomElementListValue';

export interface FormCustomElementType {
  checked?: boolean;
  dateFormat?: string;
  editable?: boolean;
  elementIndex?: number;
  elementKey: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  maximumValue?: number;
  minimumValue?: number;
  name?: string;
  required?: boolean;
  sectionIndex: number;
  textMaximumLength?: number;
  textSize?: number;
  type?: string;
  value?: string;
  valueKey?: string;
  writingAssistant?: boolean;
  elementListValues: FormCustomElementListValueType[];
}

export interface FormCustomElementTypeForceMandatory {
  checked: boolean;
  dateFormat: string;
  editable: boolean;
  elementIndex: number;
  elementKey: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  maximumValue: number;
  minimumValue: number;
  name: string;
  required: boolean;
  sectionIndex: number;
  textMaximumLength: number;
  textSize: number;
  type: string;
  value: string;
  valueKey: string;
  writingAssistant: boolean;
  elementListValues: FormCustomElementListValueType[];
}

export namespace FormCustomElement {
  /**
   * Static representation of the [[checked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECKED: BooleanField<FormCustomElement> = new BooleanField('checked', FormCustomElement, 'Edm.Boolean');
  /**
   * Static representation of the [[dateFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_FORMAT: StringField<FormCustomElement> = new StringField('dateFormat', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[editable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE: BooleanField<FormCustomElement> = new BooleanField('editable', FormCustomElement, 'Edm.Boolean');
  /**
   * Static representation of the [[elementIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEMENT_INDEX: NumberField<FormCustomElement> = new NumberField('elementIndex', FormCustomElement, 'Edm.Int32');
  /**
   * Static representation of the [[elementKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEMENT_KEY: StringField<FormCustomElement> = new StringField('elementKey', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormCustomElement> = new BigNumberField('formContentId', FormCustomElement, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormCustomElement> = new BigNumberField('formDataId', FormCustomElement, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormCustomElement> = new BigNumberField('itemId', FormCustomElement, 'Edm.Int64');
  /**
   * Static representation of the [[maximumValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_VALUE: NumberField<FormCustomElement> = new NumberField('maximumValue', FormCustomElement, 'Edm.Double');
  /**
   * Static representation of the [[minimumValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_VALUE: NumberField<FormCustomElement> = new NumberField('minimumValue', FormCustomElement, 'Edm.Double');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FormCustomElement> = new StringField('name', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[required]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUIRED: BooleanField<FormCustomElement> = new BooleanField('required', FormCustomElement, 'Edm.Boolean');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormCustomElement> = new NumberField('sectionIndex', FormCustomElement, 'Edm.Int32');
  /**
   * Static representation of the [[textMaximumLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_MAXIMUM_LENGTH: NumberField<FormCustomElement> = new NumberField('textMaximumLength', FormCustomElement, 'Edm.Int32');
  /**
   * Static representation of the [[textSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT_SIZE: NumberField<FormCustomElement> = new NumberField('textSize', FormCustomElement, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<FormCustomElement> = new StringField('type', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<FormCustomElement> = new StringField('value', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[valueKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_KEY: StringField<FormCustomElement> = new StringField('valueKey', FormCustomElement, 'Edm.String');
  /**
   * Static representation of the [[writingAssistant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRITING_ASSISTANT: BooleanField<FormCustomElement> = new BooleanField('writingAssistant', FormCustomElement, 'Edm.Boolean');
  /**
   * Static representation of the one-to-many navigation property [[elementListValues]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELEMENT_LIST_VALUES: Link<FormCustomElement, FormCustomElementListValue> = new Link('elementListValues', FormCustomElement, FormCustomElementListValue);
  /**
   * All fields of the FormCustomElement entity.
   */
  export const _allFields: Array<BooleanField<FormCustomElement> | StringField<FormCustomElement> | NumberField<FormCustomElement> | BigNumberField<FormCustomElement> | Link<FormCustomElement, FormCustomElementListValue>> = [
    FormCustomElement.CHECKED,
    FormCustomElement.DATE_FORMAT,
    FormCustomElement.EDITABLE,
    FormCustomElement.ELEMENT_INDEX,
    FormCustomElement.ELEMENT_KEY,
    FormCustomElement.FORM_CONTENT_ID,
    FormCustomElement.FORM_DATA_ID,
    FormCustomElement.ITEM_ID,
    FormCustomElement.MAXIMUM_VALUE,
    FormCustomElement.MINIMUM_VALUE,
    FormCustomElement.NAME,
    FormCustomElement.REQUIRED,
    FormCustomElement.SECTION_INDEX,
    FormCustomElement.TEXT_MAXIMUM_LENGTH,
    FormCustomElement.TEXT_SIZE,
    FormCustomElement.TYPE,
    FormCustomElement.VALUE,
    FormCustomElement.VALUE_KEY,
    FormCustomElement.WRITING_ASSISTANT,
    FormCustomElement.ELEMENT_LIST_VALUES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormCustomElement> = new AllFields('*', FormCustomElement);
  /**
   * All key fields of the FormCustomElement entity.
   */
  export const _keyFields: Array<Selectable<FormCustomElement>> = [FormCustomElement.ELEMENT_KEY, FormCustomElement.FORM_CONTENT_ID, FormCustomElement.FORM_DATA_ID, FormCustomElement.ITEM_ID, FormCustomElement.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormCustomElement.
   */
  export const _keys: { [keys: string]: Selectable<FormCustomElement> } = FormCustomElement._keyFields.reduce((acc: { [keys: string]: Selectable<FormCustomElement> }, field: Selectable<FormCustomElement>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
