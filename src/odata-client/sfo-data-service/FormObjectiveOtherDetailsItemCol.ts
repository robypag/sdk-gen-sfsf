/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveOtherDetailsItemColRequestBuilder } from './FormObjectiveOtherDetailsItemColRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveOtherDetailsItemCol" of service "SFOData".
 */
export class FormObjectiveOtherDetailsItemCol extends Entity implements FormObjectiveOtherDetailsItemColType {
  /**
   * Technical entity name for FormObjectiveOtherDetailsItemCol.
   */
  static _entityName = 'FormObjectiveOtherDetailsItemCol';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveOtherDetailsItemCol.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * datatype.
   * @nullable
   */
  datatype?: string;
  /**
   * desc.
   * @nullable
   */
  desc?: string;
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * id.
   * @nullable
   */
  id?: string;
  /**
   * index.
   * @nullable
   */
  index?: number;
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
   * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemCol`.
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
   */
  static builder(): EntityBuilderType<FormObjectiveOtherDetailsItemCol, FormObjectiveOtherDetailsItemColTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveOtherDetailsItemCol);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemCol` entity type.
   * @returns A `FormObjectiveOtherDetailsItemCol` request builder.
   */
  static requestBuilder(): FormObjectiveOtherDetailsItemColRequestBuilder {
    return new FormObjectiveOtherDetailsItemColRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemCol`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItemCol> {
    return Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItemCol);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormObjectiveOtherDetailsItemColType {
  datatype?: string;
  desc?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  id?: string;
  index?: number;
  itemId: BigNumber;
  label?: string;
  sectionIndex: number;
  type: number;
}

export interface FormObjectiveOtherDetailsItemColTypeForceMandatory {
  datatype: string;
  desc: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  id: string;
  index: number;
  itemId: BigNumber;
  label: string;
  sectionIndex: number;
  type: number;
}

export namespace FormObjectiveOtherDetailsItemCol {
  /**
   * Static representation of the [[datatype]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATATYPE: StringField<FormObjectiveOtherDetailsItemCol> = new StringField('datatype', FormObjectiveOtherDetailsItemCol, 'Edm.String');
  /**
   * Static representation of the [[desc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC: StringField<FormObjectiveOtherDetailsItemCol> = new StringField('desc', FormObjectiveOtherDetailsItemCol, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItemCol> = new BigNumberField('formContentId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItemCol> = new BigNumberField('formDataId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<FormObjectiveOtherDetailsItemCol> = new StringField('id', FormObjectiveOtherDetailsItemCol, 'Edm.String');
  /**
   * Static representation of the [[index]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEX: NumberField<FormObjectiveOtherDetailsItemCol> = new NumberField('index', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItemCol> = new BigNumberField('itemId', FormObjectiveOtherDetailsItemCol, 'Edm.Int64');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<FormObjectiveOtherDetailsItemCol> = new StringField('label', FormObjectiveOtherDetailsItemCol, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItemCol> = new NumberField('sectionIndex', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<FormObjectiveOtherDetailsItemCol> = new NumberField('type', FormObjectiveOtherDetailsItemCol, 'Edm.Int32');
  /**
   * All fields of the FormObjectiveOtherDetailsItemCol entity.
   */
  export const _allFields: Array<StringField<FormObjectiveOtherDetailsItemCol> | BigNumberField<FormObjectiveOtherDetailsItemCol> | NumberField<FormObjectiveOtherDetailsItemCol>> = [
    FormObjectiveOtherDetailsItemCol.DATATYPE,
    FormObjectiveOtherDetailsItemCol.DESC,
    FormObjectiveOtherDetailsItemCol.FORM_CONTENT_ID,
    FormObjectiveOtherDetailsItemCol.FORM_DATA_ID,
    FormObjectiveOtherDetailsItemCol.ID,
    FormObjectiveOtherDetailsItemCol.INDEX,
    FormObjectiveOtherDetailsItemCol.ITEM_ID,
    FormObjectiveOtherDetailsItemCol.LABEL,
    FormObjectiveOtherDetailsItemCol.SECTION_INDEX,
    FormObjectiveOtherDetailsItemCol.TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItemCol> = new AllFields('*', FormObjectiveOtherDetailsItemCol);
  /**
   * All key fields of the FormObjectiveOtherDetailsItemCol entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItemCol>> = [FormObjectiveOtherDetailsItemCol.FORM_CONTENT_ID, FormObjectiveOtherDetailsItemCol.FORM_DATA_ID, FormObjectiveOtherDetailsItemCol.ITEM_ID, FormObjectiveOtherDetailsItemCol.SECTION_INDEX, FormObjectiveOtherDetailsItemCol.TYPE];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemCol.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveOtherDetailsItemCol> } = FormObjectiveOtherDetailsItemCol._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveOtherDetailsItemCol> }, field: Selectable<FormObjectiveOtherDetailsItemCol>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
