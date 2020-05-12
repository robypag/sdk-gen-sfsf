/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormRatingScaleValueRequestBuilder } from './FormRatingScaleValueRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormRatingScaleValue" of service "SFOData".
 */
export class FormRatingScaleValue extends Entity implements FormRatingScaleValueType {
  /**
   * Technical entity name for FormRatingScaleValue.
   */
  static _entityName = 'FormRatingScaleValue';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormRatingScaleValue.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * description.
   * @nullable
   */
  description?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * longDescription.
   * @nullable
   */
  longDescription?: string;
  /**
   * scaleId.
   */
  scaleId!: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * value.
   */
  value!: string;

  /**
   * Returns an entity builder to construct instances `FormRatingScaleValue`.
   * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
   */
  static builder(): EntityBuilderType<FormRatingScaleValue, FormRatingScaleValueTypeForceMandatory> {
    return Entity.entityBuilder(FormRatingScaleValue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormRatingScaleValue` entity type.
   * @returns A `FormRatingScaleValue` request builder.
   */
  static requestBuilder(): FormRatingScaleValueRequestBuilder {
    return new FormRatingScaleValueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScaleValue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
   */
  static customField(fieldName: string): CustomField<FormRatingScaleValue> {
    return Entity.customFieldSelector(fieldName, FormRatingScaleValue);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormRatingScaleValueType {
  description?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  longDescription?: string;
  scaleId: string;
  sectionIndex: number;
  value: string;
}

export interface FormRatingScaleValueTypeForceMandatory {
  description: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  longDescription: string;
  scaleId: string;
  sectionIndex: number;
  value: string;
}

export namespace FormRatingScaleValue {
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FormRatingScaleValue> = new StringField('description', FormRatingScaleValue, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormRatingScaleValue> = new BigNumberField('formContentId', FormRatingScaleValue, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormRatingScaleValue> = new BigNumberField('formDataId', FormRatingScaleValue, 'Edm.Int64');
  /**
   * Static representation of the [[longDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_DESCRIPTION: StringField<FormRatingScaleValue> = new StringField('longDescription', FormRatingScaleValue, 'Edm.String');
  /**
   * Static representation of the [[scaleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCALE_ID: StringField<FormRatingScaleValue> = new StringField('scaleId', FormRatingScaleValue, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormRatingScaleValue> = new NumberField('sectionIndex', FormRatingScaleValue, 'Edm.Int32');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<FormRatingScaleValue> = new StringField('value', FormRatingScaleValue, 'Edm.String');
  /**
   * All fields of the FormRatingScaleValue entity.
   */
  export const _allFields: Array<StringField<FormRatingScaleValue> | BigNumberField<FormRatingScaleValue> | NumberField<FormRatingScaleValue>> = [
    FormRatingScaleValue.DESCRIPTION,
    FormRatingScaleValue.FORM_CONTENT_ID,
    FormRatingScaleValue.FORM_DATA_ID,
    FormRatingScaleValue.LONG_DESCRIPTION,
    FormRatingScaleValue.SCALE_ID,
    FormRatingScaleValue.SECTION_INDEX,
    FormRatingScaleValue.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormRatingScaleValue> = new AllFields('*', FormRatingScaleValue);
  /**
   * All key fields of the FormRatingScaleValue entity.
   */
  export const _keyFields: Array<Selectable<FormRatingScaleValue>> = [FormRatingScaleValue.FORM_CONTENT_ID, FormRatingScaleValue.FORM_DATA_ID, FormRatingScaleValue.SCALE_ID, FormRatingScaleValue.SECTION_INDEX, FormRatingScaleValue.VALUE];
  /**
   * Mapping of all key field names to the respective static field property FormRatingScaleValue.
   */
  export const _keys: { [keys: string]: Selectable<FormRatingScaleValue> } = FormRatingScaleValue._keyFields.reduce((acc: { [keys: string]: Selectable<FormRatingScaleValue> }, field: Selectable<FormRatingScaleValue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
