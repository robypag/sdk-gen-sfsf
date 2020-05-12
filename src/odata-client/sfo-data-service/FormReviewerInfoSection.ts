/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormReviewerInfoSectionRequestBuilder } from './FormReviewerInfoSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormReviewerInfoSection" of service "SFOData".
 */
export class FormReviewerInfoSection extends Entity implements FormReviewerInfoSectionType {
  /**
   * Technical entity name for FormReviewerInfoSection.
   */
  static _entityName = 'FormReviewerInfoSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormReviewerInfoSection.
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
   * One-to-many navigation property to the [[FormCustomElement]] entity.
   */
  reviewerInfoElements!: FormCustomElement[];

  /**
   * Returns an entity builder to construct instances `FormReviewerInfoSection`.
   * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
   */
  static builder(): EntityBuilderType<FormReviewerInfoSection, FormReviewerInfoSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormReviewerInfoSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormReviewerInfoSection` entity type.
   * @returns A `FormReviewerInfoSection` request builder.
   */
  static requestBuilder(): FormReviewerInfoSectionRequestBuilder {
    return new FormReviewerInfoSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewerInfoSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
   */
  static customField(fieldName: string): CustomField<FormReviewerInfoSection> {
    return Entity.customFieldSelector(fieldName, FormReviewerInfoSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCustomElement, FormCustomElementType } from './FormCustomElement';

export interface FormReviewerInfoSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName: string;
  reviewerInfoElements: FormCustomElementType[];
}

export interface FormReviewerInfoSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  reviewerInfoElements: FormCustomElementType[];
}

export namespace FormReviewerInfoSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormReviewerInfoSection> = new BigNumberField('formContentId', FormReviewerInfoSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormReviewerInfoSection> = new BigNumberField('formDataId', FormReviewerInfoSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormReviewerInfoSection> = new StringField('sectionDescription', FormReviewerInfoSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormReviewerInfoSection> = new NumberField('sectionIndex', FormReviewerInfoSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormReviewerInfoSection> = new StringField('sectionName', FormReviewerInfoSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[reviewerInfoElements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEWER_INFO_ELEMENTS: Link<FormReviewerInfoSection, FormCustomElement> = new Link('reviewerInfoElements', FormReviewerInfoSection, FormCustomElement);
  /**
   * All fields of the FormReviewerInfoSection entity.
   */
  export const _allFields: Array<BigNumberField<FormReviewerInfoSection> | StringField<FormReviewerInfoSection> | NumberField<FormReviewerInfoSection> | Link<FormReviewerInfoSection, FormCustomElement>> = [
    FormReviewerInfoSection.FORM_CONTENT_ID,
    FormReviewerInfoSection.FORM_DATA_ID,
    FormReviewerInfoSection.SECTION_DESCRIPTION,
    FormReviewerInfoSection.SECTION_INDEX,
    FormReviewerInfoSection.SECTION_NAME,
    FormReviewerInfoSection.REVIEWER_INFO_ELEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormReviewerInfoSection> = new AllFields('*', FormReviewerInfoSection);
  /**
   * All key fields of the FormReviewerInfoSection entity.
   */
  export const _keyFields: Array<Selectable<FormReviewerInfoSection>> = [FormReviewerInfoSection.FORM_CONTENT_ID, FormReviewerInfoSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormReviewerInfoSection.
   */
  export const _keys: { [keys: string]: Selectable<FormReviewerInfoSection> } = FormReviewerInfoSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormReviewerInfoSection> }, field: Selectable<FormReviewerInfoSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
