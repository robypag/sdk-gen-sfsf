/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360SummaryViewCategoryRequestBuilder } from './Form360SummaryViewCategoryRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360SummaryViewCategory" of service "SFOData".
 */
export class Form360SummaryViewCategory extends Entity implements Form360SummaryViewCategoryType {
  /**
   * Technical entity name for Form360SummaryViewCategory.
   */
  static _entityName = 'Form360SummaryViewCategory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360SummaryViewCategory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   */
  category!: string;
  /**
   * categoryOrder.
   */
  categoryOrder!: number;
  /**
   * categoryWeight.
   * @nullable
   */
  categoryWeight?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `Form360SummaryViewCategory`.
   * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
   */
  static builder(): EntityBuilderType<Form360SummaryViewCategory, Form360SummaryViewCategoryTypeForceMandatory> {
    return Entity.entityBuilder(Form360SummaryViewCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360SummaryViewCategory` entity type.
   * @returns A `Form360SummaryViewCategory` request builder.
   */
  static requestBuilder(): Form360SummaryViewCategoryRequestBuilder {
    return new Form360SummaryViewCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
   */
  static customField(fieldName: string): CustomField<Form360SummaryViewCategory> {
    return Entity.customFieldSelector(fieldName, Form360SummaryViewCategory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Form360SummaryViewCategoryType {
  category: string;
  categoryOrder: number;
  categoryWeight?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export interface Form360SummaryViewCategoryTypeForceMandatory {
  category: string;
  categoryOrder: number;
  categoryWeight: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export namespace Form360SummaryViewCategory {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<Form360SummaryViewCategory> = new StringField('category', Form360SummaryViewCategory, 'Edm.String');
  /**
   * Static representation of the [[categoryOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ORDER: NumberField<Form360SummaryViewCategory> = new NumberField('categoryOrder', Form360SummaryViewCategory, 'Edm.Int32');
  /**
   * Static representation of the [[categoryWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_WEIGHT: StringField<Form360SummaryViewCategory> = new StringField('categoryWeight', Form360SummaryViewCategory, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360SummaryViewCategory> = new BigNumberField('formContentId', Form360SummaryViewCategory, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360SummaryViewCategory> = new BigNumberField('formDataId', Form360SummaryViewCategory, 'Edm.Int64');
  /**
   * All fields of the Form360SummaryViewCategory entity.
   */
  export const _allFields: Array<StringField<Form360SummaryViewCategory> | NumberField<Form360SummaryViewCategory> | BigNumberField<Form360SummaryViewCategory>> = [
    Form360SummaryViewCategory.CATEGORY,
    Form360SummaryViewCategory.CATEGORY_ORDER,
    Form360SummaryViewCategory.CATEGORY_WEIGHT,
    Form360SummaryViewCategory.FORM_CONTENT_ID,
    Form360SummaryViewCategory.FORM_DATA_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360SummaryViewCategory> = new AllFields('*', Form360SummaryViewCategory);
  /**
   * All key fields of the Form360SummaryViewCategory entity.
   */
  export const _keyFields: Array<Selectable<Form360SummaryViewCategory>> = [Form360SummaryViewCategory.CATEGORY, Form360SummaryViewCategory.FORM_CONTENT_ID, Form360SummaryViewCategory.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360SummaryViewCategory.
   */
  export const _keys: { [keys: string]: Selectable<Form360SummaryViewCategory> } = Form360SummaryViewCategory._keyFields.reduce((acc: { [keys: string]: Selectable<Form360SummaryViewCategory> }, field: Selectable<Form360SummaryViewCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
