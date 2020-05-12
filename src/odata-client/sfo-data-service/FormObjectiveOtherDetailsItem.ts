/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveOtherDetailsItemRequestBuilder } from './FormObjectiveOtherDetailsItemRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveOtherDetailsItem" of service "SFOData".
 */
export class FormObjectiveOtherDetailsItem extends Entity implements FormObjectiveOtherDetailsItemType {
  /**
   * Technical entity name for FormObjectiveOtherDetailsItem.
   */
  static _entityName = 'FormObjectiveOtherDetailsItem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveOtherDetailsItem.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * title.
   * @nullable
   */
  title?: string;
  /**
   * type.
   */
  type!: number;
  /**
   * One-to-many navigation property to the [[FormObjectiveOtherDetailsItemCol]] entity.
   */
  cols!: FormObjectiveOtherDetailsItemCol[];
  /**
   * One-to-many navigation property to the [[FormObjectiveOtherDetailsItemValueCell]] entity.
   */
  values!: FormObjectiveOtherDetailsItemValueCell[];

  /**
   * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItem`.
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
   */
  static builder(): EntityBuilderType<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveOtherDetailsItem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItem` entity type.
   * @returns A `FormObjectiveOtherDetailsItem` request builder.
   */
  static requestBuilder(): FormObjectiveOtherDetailsItemRequestBuilder {
    return new FormObjectiveOtherDetailsItemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItem> {
    return Entity.customFieldSelector(fieldName, FormObjectiveOtherDetailsItem);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormObjectiveOtherDetailsItemCol, FormObjectiveOtherDetailsItemColType } from './FormObjectiveOtherDetailsItemCol';
import { FormObjectiveOtherDetailsItemValueCell, FormObjectiveOtherDetailsItemValueCellType } from './FormObjectiveOtherDetailsItemValueCell';

export interface FormObjectiveOtherDetailsItemType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  title?: string;
  type: number;
  cols: FormObjectiveOtherDetailsItemColType[];
  values: FormObjectiveOtherDetailsItemValueCellType[];
}

export interface FormObjectiveOtherDetailsItemTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  title: string;
  type: number;
  cols: FormObjectiveOtherDetailsItemColType[];
  values: FormObjectiveOtherDetailsItemValueCellType[];
}

export namespace FormObjectiveOtherDetailsItem {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItem> = new BigNumberField('formContentId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItem> = new BigNumberField('formDataId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItem> = new BigNumberField('itemId', FormObjectiveOtherDetailsItem, 'Edm.Int64');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItem> = new NumberField('sectionIndex', FormObjectiveOtherDetailsItem, 'Edm.Int32');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<FormObjectiveOtherDetailsItem> = new StringField('title', FormObjectiveOtherDetailsItem, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<FormObjectiveOtherDetailsItem> = new NumberField('type', FormObjectiveOtherDetailsItem, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[cols]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLS: Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol> = new Link('cols', FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol);
  /**
   * Static representation of the one-to-many navigation property [[values]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUES: Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell> = new Link('values', FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell);
  /**
   * All fields of the FormObjectiveOtherDetailsItem entity.
   */
  export const _allFields: Array<BigNumberField<FormObjectiveOtherDetailsItem> | NumberField<FormObjectiveOtherDetailsItem> | StringField<FormObjectiveOtherDetailsItem> | Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol> | Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell>> = [
    FormObjectiveOtherDetailsItem.FORM_CONTENT_ID,
    FormObjectiveOtherDetailsItem.FORM_DATA_ID,
    FormObjectiveOtherDetailsItem.ITEM_ID,
    FormObjectiveOtherDetailsItem.SECTION_INDEX,
    FormObjectiveOtherDetailsItem.TITLE,
    FormObjectiveOtherDetailsItem.TYPE,
    FormObjectiveOtherDetailsItem.COLS,
    FormObjectiveOtherDetailsItem.VALUES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItem> = new AllFields('*', FormObjectiveOtherDetailsItem);
  /**
   * All key fields of the FormObjectiveOtherDetailsItem entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItem>> = [FormObjectiveOtherDetailsItem.FORM_CONTENT_ID, FormObjectiveOtherDetailsItem.FORM_DATA_ID, FormObjectiveOtherDetailsItem.ITEM_ID, FormObjectiveOtherDetailsItem.SECTION_INDEX, FormObjectiveOtherDetailsItem.TYPE];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItem.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveOtherDetailsItem> } = FormObjectiveOtherDetailsItem._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveOtherDetailsItem> }, field: Selectable<FormObjectiveOtherDetailsItem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
