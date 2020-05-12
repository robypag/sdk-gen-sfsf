/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormIntroductionSectionRequestBuilder } from './FormIntroductionSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormIntroductionSection" of service "SFOData".
 */
export class FormIntroductionSection extends Entity implements FormIntroductionSectionType {
  /**
   * Technical entity name for FormIntroductionSection.
   */
  static _entityName = 'FormIntroductionSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormIntroductionSection.
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
   * Returns an entity builder to construct instances `FormIntroductionSection`.
   * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
   */
  static builder(): EntityBuilderType<FormIntroductionSection, FormIntroductionSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormIntroductionSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormIntroductionSection` entity type.
   * @returns A `FormIntroductionSection` request builder.
   */
  static requestBuilder(): FormIntroductionSectionRequestBuilder {
    return new FormIntroductionSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormIntroductionSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
   */
  static customField(fieldName: string): CustomField<FormIntroductionSection> {
    return Entity.customFieldSelector(fieldName, FormIntroductionSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormIntroductionSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName?: string;
}

export interface FormIntroductionSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
}

export namespace FormIntroductionSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormIntroductionSection> = new BigNumberField('formContentId', FormIntroductionSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormIntroductionSection> = new BigNumberField('formDataId', FormIntroductionSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormIntroductionSection> = new StringField('sectionDescription', FormIntroductionSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormIntroductionSection> = new NumberField('sectionIndex', FormIntroductionSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormIntroductionSection> = new StringField('sectionName', FormIntroductionSection, 'Edm.String');
  /**
   * All fields of the FormIntroductionSection entity.
   */
  export const _allFields: Array<BigNumberField<FormIntroductionSection> | StringField<FormIntroductionSection> | NumberField<FormIntroductionSection>> = [
    FormIntroductionSection.FORM_CONTENT_ID,
    FormIntroductionSection.FORM_DATA_ID,
    FormIntroductionSection.SECTION_DESCRIPTION,
    FormIntroductionSection.SECTION_INDEX,
    FormIntroductionSection.SECTION_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormIntroductionSection> = new AllFields('*', FormIntroductionSection);
  /**
   * All key fields of the FormIntroductionSection entity.
   */
  export const _keyFields: Array<Selectable<FormIntroductionSection>> = [FormIntroductionSection.FORM_CONTENT_ID, FormIntroductionSection.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property FormIntroductionSection.
   */
  export const _keys: { [keys: string]: Selectable<FormIntroductionSection> } = FormIntroductionSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormIntroductionSection> }, field: Selectable<FormIntroductionSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
