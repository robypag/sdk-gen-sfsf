/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormUserInformationSectionRequestBuilder } from './FormUserInformationSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormUserInformationSection" of service "SFOData".
 */
export class FormUserInformationSection extends Entity implements FormUserInformationSectionType {
  /**
   * Technical entity name for FormUserInformationSection.
   */
  static _entityName = 'FormUserInformationSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormUserInformationSection.
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
   * One-to-many navigation property to the [[FormCustomElement]] entity.
   */
  userInformationElements!: FormCustomElement[];

  /**
   * Returns an entity builder to construct instances `FormUserInformationSection`.
   * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
   */
  static builder(): EntityBuilderType<FormUserInformationSection, FormUserInformationSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormUserInformationSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormUserInformationSection` entity type.
   * @returns A `FormUserInformationSection` request builder.
   */
  static requestBuilder(): FormUserInformationSectionRequestBuilder {
    return new FormUserInformationSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserInformationSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
   */
  static customField(fieldName: string): CustomField<FormUserInformationSection> {
    return Entity.customFieldSelector(fieldName, FormUserInformationSection);
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

export interface FormUserInformationSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
  userInformationElements: FormCustomElementType[];
}

export interface FormUserInformationSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  userInformationElements: FormCustomElementType[];
}

export namespace FormUserInformationSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormUserInformationSection> = new BigNumberField('formContentId', FormUserInformationSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormUserInformationSection> = new BigNumberField('formDataId', FormUserInformationSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormUserInformationSection> = new StringField('sectionDescription', FormUserInformationSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormUserInformationSection> = new NumberField('sectionIndex', FormUserInformationSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormUserInformationSection> = new StringField('sectionName', FormUserInformationSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[userInformationElements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_INFORMATION_ELEMENTS: Link<FormUserInformationSection, FormCustomElement> = new Link('userInformationElements', FormUserInformationSection, FormCustomElement);
  /**
   * All fields of the FormUserInformationSection entity.
   */
  export const _allFields: Array<BigNumberField<FormUserInformationSection> | StringField<FormUserInformationSection> | NumberField<FormUserInformationSection> | Link<FormUserInformationSection, FormCustomElement>> = [
    FormUserInformationSection.FORM_CONTENT_ID,
    FormUserInformationSection.FORM_DATA_ID,
    FormUserInformationSection.SECTION_DESCRIPTION,
    FormUserInformationSection.SECTION_INDEX,
    FormUserInformationSection.SECTION_NAME,
    FormUserInformationSection.USER_INFORMATION_ELEMENTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormUserInformationSection> = new AllFields('*', FormUserInformationSection);
  /**
   * All key fields of the FormUserInformationSection entity.
   */
  export const _keyFields: Array<Selectable<FormUserInformationSection>> = [FormUserInformationSection.FORM_CONTENT_ID, FormUserInformationSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormUserInformationSection.
   */
  export const _keys: { [keys: string]: Selectable<FormUserInformationSection> } = FormUserInformationSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormUserInformationSection> }, field: Selectable<FormUserInformationSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
