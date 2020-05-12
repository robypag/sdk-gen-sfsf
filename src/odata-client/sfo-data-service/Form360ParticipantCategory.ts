/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ParticipantCategoryRequestBuilder } from './Form360ParticipantCategoryRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360ParticipantCategory" of service "SFOData".
 */
export class Form360ParticipantCategory extends Entity implements Form360ParticipantCategoryType {
  /**
   * Technical entity name for Form360ParticipantCategory.
   */
  static _entityName = 'Form360ParticipantCategory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360ParticipantCategory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * categoryLabel.
   * @nullable
   */
  categoryLabel?: string;
  /**
   * categoryOrder.
   * @nullable
   */
  categoryOrder?: number;
  /**
   * categoryValue.
   */
  categoryValue!: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `Form360ParticipantCategory`.
   * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
   */
  static builder(): EntityBuilderType<Form360ParticipantCategory, Form360ParticipantCategoryTypeForceMandatory> {
    return Entity.entityBuilder(Form360ParticipantCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360ParticipantCategory` entity type.
   * @returns A `Form360ParticipantCategory` request builder.
   */
  static requestBuilder(): Form360ParticipantCategoryRequestBuilder {
    return new Form360ParticipantCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
   */
  static customField(fieldName: string): CustomField<Form360ParticipantCategory> {
    return Entity.customFieldSelector(fieldName, Form360ParticipantCategory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Form360ParticipantCategoryType {
  categoryLabel?: string;
  categoryOrder?: number;
  categoryValue: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export interface Form360ParticipantCategoryTypeForceMandatory {
  categoryLabel: string;
  categoryOrder: number;
  categoryValue: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
}

export namespace Form360ParticipantCategory {
  /**
   * Static representation of the [[categoryLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LABEL: StringField<Form360ParticipantCategory> = new StringField('categoryLabel', Form360ParticipantCategory, 'Edm.String');
  /**
   * Static representation of the [[categoryOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ORDER: NumberField<Form360ParticipantCategory> = new NumberField('categoryOrder', Form360ParticipantCategory, 'Edm.Int32');
  /**
   * Static representation of the [[categoryValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_VALUE: StringField<Form360ParticipantCategory> = new StringField('categoryValue', Form360ParticipantCategory, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360ParticipantCategory> = new BigNumberField('formContentId', Form360ParticipantCategory, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360ParticipantCategory> = new BigNumberField('formDataId', Form360ParticipantCategory, 'Edm.Int64');
  /**
   * All fields of the Form360ParticipantCategory entity.
   */
  export const _allFields: Array<StringField<Form360ParticipantCategory> | NumberField<Form360ParticipantCategory> | BigNumberField<Form360ParticipantCategory>> = [
    Form360ParticipantCategory.CATEGORY_LABEL,
    Form360ParticipantCategory.CATEGORY_ORDER,
    Form360ParticipantCategory.CATEGORY_VALUE,
    Form360ParticipantCategory.FORM_CONTENT_ID,
    Form360ParticipantCategory.FORM_DATA_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360ParticipantCategory> = new AllFields('*', Form360ParticipantCategory);
  /**
   * All key fields of the Form360ParticipantCategory entity.
   */
  export const _keyFields: Array<Selectable<Form360ParticipantCategory>> = [Form360ParticipantCategory.CATEGORY_VALUE, Form360ParticipantCategory.FORM_CONTENT_ID, Form360ParticipantCategory.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360ParticipantCategory.
   */
  export const _keys: { [keys: string]: Selectable<Form360ParticipantCategory> } = Form360ParticipantCategory._keyFields.reduce((acc: { [keys: string]: Selectable<Form360ParticipantCategory> }, field: Selectable<Form360ParticipantCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
