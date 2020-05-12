/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveOtherDetailsItemValueCellRequestBuilder } from './FormObjectiveOtherDetailsItemValueCellRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveOtherDetailsItemValueCell" of service "SFOData".
 */
export class FormObjectiveOtherDetailsItemValueCell extends Entity implements FormObjectiveOtherDetailsItemValueCellType {
  /**
   * Technical entity name for FormObjectiveOtherDetailsItemValueCell.
   */
  static _entityName = 'FormObjectiveOtherDetailsItemValueCell';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveOtherDetailsItemValueCell.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * colId.
   * @nullable
   */
  colId?: string;
  /**
   * colIndex.
   * @nullable
   */
  colIndex?: number;
  /**
   * datatype.
   * @nullable
   */
  datatype?: string;
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
   * rowIndex.
   * @nullable
   */
  rowIndex?: number;
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
   * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemValueCell`.
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
   */
  static builder(): EntityBuilderType<FormObjectiveOtherDetailsItemValueCell, FormObjectiveOtherDetailsItemValueCellTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveOtherDetailsItemValueCell);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemValueCell` entity type.
   * @returns A `FormObjectiveOtherDetailsItemValueCell` request builder.
   */
  static requestBuilder(): FormObjectiveOtherDetailsItemValueCellRequestBuilder {
    return new FormObjectiveOtherDetailsItemValueCellRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemValueCell`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItemValueCell> {
    return Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItemValueCell);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormObjectiveOtherDetailsItemValueCellType {
  colId?: string;
  colIndex?: number;
  datatype?: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  rowIndex?: number;
  sectionIndex: number;
  type: number;
  value?: string;
}

export interface FormObjectiveOtherDetailsItemValueCellTypeForceMandatory {
  colId: string;
  colIndex: number;
  datatype: string;
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  rowIndex: number;
  sectionIndex: number;
  type: number;
  value: string;
}

export namespace FormObjectiveOtherDetailsItemValueCell {
  /**
   * Static representation of the [[colId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COL_ID: StringField<FormObjectiveOtherDetailsItemValueCell> = new StringField('colId', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
  /**
   * Static representation of the [[colIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COL_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell> = new NumberField('colIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
  /**
   * Static representation of the [[datatype]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATATYPE: StringField<FormObjectiveOtherDetailsItemValueCell> = new StringField('datatype', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell> = new BigNumberField('formContentId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell> = new BigNumberField('formDataId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell> = new BigNumberField('itemId', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int64');
  /**
   * Static representation of the [[rowIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROW_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell> = new NumberField('rowIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell> = new NumberField('sectionIndex', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<FormObjectiveOtherDetailsItemValueCell> = new NumberField('type', FormObjectiveOtherDetailsItemValueCell, 'Edm.Int32');
  /**
   * Static representation of the [[value]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE: StringField<FormObjectiveOtherDetailsItemValueCell> = new StringField('value', FormObjectiveOtherDetailsItemValueCell, 'Edm.String');
  /**
   * All fields of the FormObjectiveOtherDetailsItemValueCell entity.
   */
  export const _allFields: Array<StringField<FormObjectiveOtherDetailsItemValueCell> | NumberField<FormObjectiveOtherDetailsItemValueCell> | BigNumberField<FormObjectiveOtherDetailsItemValueCell>> = [
    FormObjectiveOtherDetailsItemValueCell.COL_ID,
    FormObjectiveOtherDetailsItemValueCell.COL_INDEX,
    FormObjectiveOtherDetailsItemValueCell.DATATYPE,
    FormObjectiveOtherDetailsItemValueCell.FORM_CONTENT_ID,
    FormObjectiveOtherDetailsItemValueCell.FORM_DATA_ID,
    FormObjectiveOtherDetailsItemValueCell.ITEM_ID,
    FormObjectiveOtherDetailsItemValueCell.ROW_INDEX,
    FormObjectiveOtherDetailsItemValueCell.SECTION_INDEX,
    FormObjectiveOtherDetailsItemValueCell.TYPE,
    FormObjectiveOtherDetailsItemValueCell.VALUE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItemValueCell> = new AllFields('*', FormObjectiveOtherDetailsItemValueCell);
  /**
   * All key fields of the FormObjectiveOtherDetailsItemValueCell entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItemValueCell>> = [FormObjectiveOtherDetailsItemValueCell.FORM_CONTENT_ID, FormObjectiveOtherDetailsItemValueCell.FORM_DATA_ID, FormObjectiveOtherDetailsItemValueCell.ITEM_ID, FormObjectiveOtherDetailsItemValueCell.SECTION_INDEX, FormObjectiveOtherDetailsItemValueCell.TYPE];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemValueCell.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveOtherDetailsItemValueCell> } = FormObjectiveOtherDetailsItemValueCell._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveOtherDetailsItemValueCell> }, field: Selectable<FormObjectiveOtherDetailsItemValueCell>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
