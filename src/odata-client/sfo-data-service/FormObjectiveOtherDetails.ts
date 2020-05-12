/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormObjectiveOtherDetailsRequestBuilder } from './FormObjectiveOtherDetailsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormObjectiveOtherDetails" of service "SFOData".
 */
export class FormObjectiveOtherDetails extends Entity implements FormObjectiveOtherDetailsType {
  /**
   * Technical entity name for FormObjectiveOtherDetails.
   */
  static _entityName = 'FormObjectiveOtherDetails';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormObjectiveOtherDetails.
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
   * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
   */
  metricLookupTables!: FormObjectiveOtherDetailsItem;
  /**
   * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
   */
  milestones!: FormObjectiveOtherDetailsItem;
  /**
   * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
   */
  targets!: FormObjectiveOtherDetailsItem;
  /**
   * One-to-one navigation property to the [[FormObjectiveOtherDetailsItem]] entity.
   */
  tasks!: FormObjectiveOtherDetailsItem;

  /**
   * Returns an entity builder to construct instances `FormObjectiveOtherDetails`.
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
   */
  static builder(): EntityBuilderType<FormObjectiveOtherDetails, FormObjectiveOtherDetailsTypeForceMandatory> {
    return Entity.entityBuilder(FormObjectiveOtherDetails);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetails` entity type.
   * @returns A `FormObjectiveOtherDetails` request builder.
   */
  static requestBuilder(): FormObjectiveOtherDetailsRequestBuilder {
    return new FormObjectiveOtherDetailsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetails`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetails`.
   */
  static customField(fieldName: string): CustomField<FormObjectiveOtherDetails> {
    return Entity.customFieldSelector(fieldName, FormObjectiveOtherDetails);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemType } from './FormObjectiveOtherDetailsItem';

export interface FormObjectiveOtherDetailsType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  metricLookupTables: FormObjectiveOtherDetailsItemType;
  milestones: FormObjectiveOtherDetailsItemType;
  targets: FormObjectiveOtherDetailsItemType;
  tasks: FormObjectiveOtherDetailsItemType;
}

export interface FormObjectiveOtherDetailsTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  itemId: BigNumber;
  sectionIndex: number;
  metricLookupTables: FormObjectiveOtherDetailsItemType;
  milestones: FormObjectiveOtherDetailsItemType;
  targets: FormObjectiveOtherDetailsItemType;
  tasks: FormObjectiveOtherDetailsItemType;
}

export namespace FormObjectiveOtherDetails {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetails> = new BigNumberField('formContentId', FormObjectiveOtherDetails, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetails> = new BigNumberField('formDataId', FormObjectiveOtherDetails, 'Edm.Int64');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<FormObjectiveOtherDetails> = new BigNumberField('itemId', FormObjectiveOtherDetails, 'Edm.Int64');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormObjectiveOtherDetails> = new NumberField('sectionIndex', FormObjectiveOtherDetails, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[metricLookupTables]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const METRIC_LOOKUP_TABLES: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem> = new OneToOneLink('metricLookupTables', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem);
  /**
   * Static representation of the one-to-one navigation property [[milestones]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MILESTONES: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem> = new OneToOneLink('milestones', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem);
  /**
   * Static representation of the one-to-one navigation property [[targets]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGETS: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem> = new OneToOneLink('targets', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem);
  /**
   * Static representation of the one-to-one navigation property [[tasks]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TASKS: OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem> = new OneToOneLink('tasks', FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem);
  /**
   * All fields of the FormObjectiveOtherDetails entity.
   */
  export const _allFields: Array<BigNumberField<FormObjectiveOtherDetails> | NumberField<FormObjectiveOtherDetails> | OneToOneLink<FormObjectiveOtherDetails, FormObjectiveOtherDetailsItem>> = [
    FormObjectiveOtherDetails.FORM_CONTENT_ID,
    FormObjectiveOtherDetails.FORM_DATA_ID,
    FormObjectiveOtherDetails.ITEM_ID,
    FormObjectiveOtherDetails.SECTION_INDEX,
    FormObjectiveOtherDetails.METRIC_LOOKUP_TABLES,
    FormObjectiveOtherDetails.MILESTONES,
    FormObjectiveOtherDetails.TARGETS,
    FormObjectiveOtherDetails.TASKS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormObjectiveOtherDetails> = new AllFields('*', FormObjectiveOtherDetails);
  /**
   * All key fields of the FormObjectiveOtherDetails entity.
   */
  export const _keyFields: Array<Selectable<FormObjectiveOtherDetails>> = [FormObjectiveOtherDetails.FORM_CONTENT_ID, FormObjectiveOtherDetails.FORM_DATA_ID, FormObjectiveOtherDetails.ITEM_ID, FormObjectiveOtherDetails.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormObjectiveOtherDetails.
   */
  export const _keys: { [keys: string]: Selectable<FormObjectiveOtherDetails> } = FormObjectiveOtherDetails._keyFields.reduce((acc: { [keys: string]: Selectable<FormObjectiveOtherDetails> }, field: Selectable<FormObjectiveOtherDetails>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
