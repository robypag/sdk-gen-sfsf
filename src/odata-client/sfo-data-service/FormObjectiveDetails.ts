/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveDetailsRequestBuilder } from './FormObjectiveDetailsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveDetails" of service "SFOData".
 */
export class FormObjectiveDetails extends Entity implements FormObjectiveDetailsType {
  /**
   * Technical entity name for FormObjectiveDetails.
   */
  static _entityName = 'FormObjectiveDetails';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveDetails.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * fieldDataType.
   * @nullable
   */
  fieldDataType?: string;
  /**
   * fieldId.
   * @nullable
   */
  fieldId?: string;
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
   * label.
   * @nullable
   */
  label?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * type.
   */
  type!: number;
  /**
   * value.
   * @nullable
   */
  value?: string;

  /**
   * Returns an entity builder to construct instances `FormObjectiveDetails`.
   * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
   */
  static builder(): EntityBuilderType<FormObjectiveDetails, FormObjectiveDetailsTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveDetails);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveDetails` entity type.
   * @returns A `FormObjectiveDetails` request builder.
   */
  static requestBuilder(): FormObjectiveDetailsRequestBuilder {
    return new FormObjectiveDetailsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveDetails`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveDetails> {
    return Entity.customFieldSelector(fieldName, FormObjectiveDetails);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormObjectiveDetailsType {
  fieldDataType?: string;
  fieldId?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  label?: string;
  sectionIndex: number;
  type: number;
  value?: string;
}

export interface FormObjectiveDetailsTypeForceMandatory {
  fieldDataType: string;
  fieldId: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  label: string;
  sectionIndex: number;
  type: number;
  value: string;
}

export namespace FormObjectiveDetails {
  /**
   * Static representation of the [[fieldDataType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_DATA_TYPE: StringField<FormObjectiveDetails> = new StringField('fieldDataType', FormObjectiveDetails, 'Edm.String');
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<FormObjectiveDetails> = new StringField('fieldId', FormObjectiveDetails, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveDetails> = new BigNumberField('formContentId', FormObjectiveDetails, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveDetails> = new BigNumberField('formDataId', FormObjectiveDetails, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveDetails> = new BigNumberField('itemId', FormObjectiveDetails, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<FormObjectiveDetails> = new StringField('label', FormObjectiveDetails, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveDetails> = new NumberField('sectionIndex', FormObjectiveDetails, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<FormObjectiveDetails> = new NumberField('type', FormObjectiveDetails, 'Edm.Int32');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<FormObjectiveDetails> = new StringField('value', FormObjectiveDetails, 'Edm.String');
  /**
   * All fields of the FormObjectiveDetails entity.
   */
  export const _allFields: Array<StringField<FormObjectiveDetails> | BigNumberField<FormObjectiveDetails> | NumberField<FormObjectiveDetails>> = [
    FormObjectiveDetails.FIELD_DATA_TYPE,
    FormObjectiveDetails.FIELD_ID,
    FormObjectiveDetails.FORM_CONTENT_ID,
    FormObjectiveDetails.FORM_DATA_ID,
    FormObjectiveDetails.ITEM_ID,
    FormObjectiveDetails.LABEL,
    FormObjectiveDetails.SECTION_INDEX,
    FormObjectiveDetails.TYPE,
    FormObjectiveDetails.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveDetails> = new AllFields('*', FormObjectiveDetails);
  /**
   * All key fields of the FormObjectiveDetails entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveDetails>> = [FormObjectiveDetails.FORM_CONTENT_ID, FormObjectiveDetails.FORM_DATA_ID, FormObjectiveDetails.ITEM_ID, FormObjectiveDetails.SECTION_INDEX, FormObjectiveDetails.TYPE];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveDetails.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveDetails> } = FormObjectiveDetails._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveDetails> }, field: Selectable<FormObjectiveDetails>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
