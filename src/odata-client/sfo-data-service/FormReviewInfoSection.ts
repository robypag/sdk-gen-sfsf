/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormReviewInfoSectionRequestBuilder } from './FormReviewInfoSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormReviewInfoSection" of service "SFOData".
 */
export class FormReviewInfoSection extends Entity implements FormReviewInfoSectionType {
  /**
   * Technical entity name for FormReviewInfoSection.
   */
  static _entityName = 'FormReviewInfoSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormReviewInfoSection.
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
   * formDateFormat.
   */
  formDateFormat!: string;
  /**
   * formOriginator.
   */
  formOriginator!: string;
  /**
   * isDueDateValidationDisabled.
   */
  isDueDateValidationDisabled!: boolean;
  /**
   * isReviewDatesEditable.
   */
  isReviewDatesEditable!: boolean;
  /**
   * reviewDueDate.
   */
  reviewDueDate!: string;
  /**
   * reviewEndDate.
   */
  reviewEndDate!: string;
  /**
   * reviewStartDate.
   */
  reviewStartDate!: string;
  /**
   * sectionDescription.
   * @nullable
   */
  sectionDescription?: string;
  /**
   * sectionIndex.
   */
  sectionIndex!: number;
  /**
   * sectionName.
   */
  sectionName!: string;

  /**
   * Returns an entity builder to construct instances `FormReviewInfoSection`.
   * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
   */
  static builder(): EntityBuilderType<FormReviewInfoSection, FormReviewInfoSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormReviewInfoSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormReviewInfoSection` entity type.
   * @returns A `FormReviewInfoSection` request builder.
   */
  static requestBuilder(): FormReviewInfoSectionRequestBuilder {
    return new FormReviewInfoSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewInfoSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
   */
  static customField(fieldName: string): CustomField<FormReviewInfoSection> {
    return Entity.customFieldSelector(fieldName, FormReviewInfoSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormReviewInfoSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formDateFormat: string;
  formOriginator: string;
  isDueDateValidationDisabled: boolean;
  isReviewDatesEditable: boolean;
  reviewDueDate: string;
  reviewEndDate: string;
  reviewStartDate: string;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName: string;
}

export interface FormReviewInfoSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formDateFormat: string;
  formOriginator: string;
  isDueDateValidationDisabled: boolean;
  isReviewDatesEditable: boolean;
  reviewDueDate: string;
  reviewEndDate: string;
  reviewStartDate: string;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
}

export namespace FormReviewInfoSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormReviewInfoSection> = new BigNumberField('formContentId', FormReviewInfoSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormReviewInfoSection> = new BigNumberField('formDataId', FormReviewInfoSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDateFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATE_FORMAT: StringField<FormReviewInfoSection> = new StringField('formDateFormat', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[formOriginator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ORIGINATOR: StringField<FormReviewInfoSection> = new StringField('formOriginator', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[isDueDateValidationDisabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DUE_DATE_VALIDATION_DISABLED: BooleanField<FormReviewInfoSection> = new BooleanField('isDueDateValidationDisabled', FormReviewInfoSection, 'Edm.Boolean');
  /**
   * Static representation of the [[isReviewDatesEditable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_REVIEW_DATES_EDITABLE: BooleanField<FormReviewInfoSection> = new BooleanField('isReviewDatesEditable', FormReviewInfoSection, 'Edm.Boolean');
  /**
   * Static representation of the [[reviewDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_DUE_DATE: StringField<FormReviewInfoSection> = new StringField('reviewDueDate', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[reviewEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_END_DATE: StringField<FormReviewInfoSection> = new StringField('reviewEndDate', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[reviewStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_START_DATE: StringField<FormReviewInfoSection> = new StringField('reviewStartDate', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormReviewInfoSection> = new StringField('sectionDescription', FormReviewInfoSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormReviewInfoSection> = new NumberField('sectionIndex', FormReviewInfoSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormReviewInfoSection> = new StringField('sectionName', FormReviewInfoSection, 'Edm.String');
  /**
   * All fields of the FormReviewInfoSection entity.
   */
  export const _allFields: Array<BigNumberField<FormReviewInfoSection> | StringField<FormReviewInfoSection> | BooleanField<FormReviewInfoSection> | NumberField<FormReviewInfoSection>> = [
    FormReviewInfoSection.FORM_CONTENT_ID,
    FormReviewInfoSection.FORM_DATA_ID,
    FormReviewInfoSection.FORM_DATE_FORMAT,
    FormReviewInfoSection.FORM_ORIGINATOR,
    FormReviewInfoSection.IS_DUE_DATE_VALIDATION_DISABLED,
    FormReviewInfoSection.IS_REVIEW_DATES_EDITABLE,
    FormReviewInfoSection.REVIEW_DUE_DATE,
    FormReviewInfoSection.REVIEW_END_DATE,
    FormReviewInfoSection.REVIEW_START_DATE,
    FormReviewInfoSection.SECTION_DESCRIPTION,
    FormReviewInfoSection.SECTION_INDEX,
    FormReviewInfoSection.SECTION_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormReviewInfoSection> = new AllFields('*', FormReviewInfoSection);
  /**
   * All key fields of the FormReviewInfoSection entity.
   */
  export const _keyFields: Array<Selectable<FormReviewInfoSection>> = [FormReviewInfoSection.FORM_CONTENT_ID, FormReviewInfoSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormReviewInfoSection.
   */
  export const _keys: { [keys: string]: Selectable<FormReviewInfoSection> } = FormReviewInfoSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormReviewInfoSection> }, field: Selectable<FormReviewInfoSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
