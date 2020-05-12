/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormSignatureSectionRequestBuilder } from './FormSignatureSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormSignatureSection" of service "SFOData".
 */
export class FormSignatureSection extends Entity implements FormSignatureSectionType {
  /**
   * Technical entity name for FormSignatureSection.
   */
  static _entityName = 'FormSignatureSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormSignatureSection.
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
   * @nullable
   */
  sectionName?: string;
  /**
   * One-to-many navigation property to the [[FormSignature]] entity.
   */
  signatures!: FormSignature[];

  /**
   * Returns an entity builder to construct instances `FormSignatureSection`.
   * @returns A builder that constructs instances of entity type `FormSignatureSection`.
   */
  static builder(): EntityBuilderType<FormSignatureSection, FormSignatureSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormSignatureSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormSignatureSection` entity type.
   * @returns A `FormSignatureSection` request builder.
   */
  static requestBuilder(): FormSignatureSectionRequestBuilder {
    return new FormSignatureSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSignatureSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormSignatureSection`.
   */
  static customField(fieldName: string): CustomField<FormSignatureSection> {
    return Entity.customFieldSelector(fieldName, FormSignatureSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormSignature, FormSignatureType } from './FormSignature';

export interface FormSignatureSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  signatures: FormSignatureType[];
}

export interface FormSignatureSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  signatures: FormSignatureType[];
}

export namespace FormSignatureSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormSignatureSection> = new BigNumberField('formContentId', FormSignatureSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormSignatureSection> = new BigNumberField('formDataId', FormSignatureSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormSignatureSection> = new StringField('sectionDescription', FormSignatureSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormSignatureSection> = new NumberField('sectionIndex', FormSignatureSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormSignatureSection> = new StringField('sectionName', FormSignatureSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[signatures]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURES: Link<FormSignatureSection, FormSignature> = new Link('signatures', FormSignatureSection, FormSignature);
  /**
   * All fields of the FormSignatureSection entity.
   */
  export const _allFields: Array<BigNumberField<FormSignatureSection> | StringField<FormSignatureSection> | NumberField<FormSignatureSection> | Link<FormSignatureSection, FormSignature>> = [
    FormSignatureSection.FORM_CONTENT_ID,
    FormSignatureSection.FORM_DATA_ID,
    FormSignatureSection.SECTION_DESCRIPTION,
    FormSignatureSection.SECTION_INDEX,
    FormSignatureSection.SECTION_NAME,
    FormSignatureSection.SIGNATURES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormSignatureSection> = new AllFields('*', FormSignatureSection);
  /**
   * All key fields of the FormSignatureSection entity.
   */
  export const _keyFields: Array<Selectable<FormSignatureSection>> = [FormSignatureSection.FORM_CONTENT_ID, FormSignatureSection.FORM_DATA_ID, FormSignatureSection.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormSignatureSection.
   */
  export const _keys: { [keys: string]: Selectable<FormSignatureSection> } = FormSignatureSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormSignatureSection> }, field: Selectable<FormSignatureSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
