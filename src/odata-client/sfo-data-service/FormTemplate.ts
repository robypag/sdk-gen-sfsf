/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormTemplateRequestBuilder } from './FormTemplateRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormTemplate" of service "SFOData".
 */
export class FormTemplate extends Entity implements FormTemplateType {
  /**
   * Technical entity name for FormTemplate.
   */
  static _entityName = 'FormTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormTemplate.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formTemplateId.
   */
  formTemplateId!: BigNumber;
  /**
   * formTemplateName.
   */
  formTemplateName!: string;
  /**
   * formTemplateType.
   */
  formTemplateType!: string;
  /**
   * One-to-many navigation property to the [[FormHeader]] entity.
   */
  associatedForms!: FormHeader[];

  /**
   * Returns an entity builder to construct instances `FormTemplate`.
   * @returns A builder that constructs instances of entity type `FormTemplate`.
   */
  static builder(): EntityBuilderType<FormTemplate, FormTemplateTypeForceMandatory> {
    return Entity.entityBuilder(FormTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormTemplate` entity type.
   * @returns A `FormTemplate` request builder.
   */
  static requestBuilder(): FormTemplateRequestBuilder {
    return new FormTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormTemplate`.
   */
  static customField(fieldName: string): CustomField<FormTemplate> {
    return Entity.customFieldSelector(fieldName, FormTemplate);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormHeader, FormHeaderType } from './FormHeader';

export interface FormTemplateType {
  formTemplateId: BigNumber;
  formTemplateName: string;
  formTemplateType: string;
  associatedForms: FormHeaderType[];
}

export interface FormTemplateTypeForceMandatory {
  formTemplateId: BigNumber;
  formTemplateName: string;
  formTemplateType: string;
  associatedForms: FormHeaderType[];
}

export namespace FormTemplate {
  /**
   * Static representation of the [[formTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_ID: BigNumberField<FormTemplate> = new BigNumberField('formTemplateId', FormTemplate, 'Edm.Int64');
  /**
   * Static representation of the [[formTemplateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_NAME: StringField<FormTemplate> = new StringField('formTemplateName', FormTemplate, 'Edm.String');
  /**
   * Static representation of the [[formTemplateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_TYPE: StringField<FormTemplate> = new StringField('formTemplateType', FormTemplate, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[associatedForms]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSOCIATED_FORMS: Link<FormTemplate, FormHeader> = new Link('associatedForms', FormTemplate, FormHeader);
  /**
   * All fields of the FormTemplate entity.
   */
  export const _allFields: Array<BigNumberField<FormTemplate> | StringField<FormTemplate> | Link<FormTemplate, FormHeader>> = [
    FormTemplate.FORM_TEMPLATE_ID,
    FormTemplate.FORM_TEMPLATE_NAME,
    FormTemplate.FORM_TEMPLATE_TYPE,
    FormTemplate.ASSOCIATED_FORMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormTemplate> = new AllFields('*', FormTemplate);
  /**
   * All key fields of the FormTemplate entity.
   */
  export const _keyFields: Array<Selectable<FormTemplate>> = [FormTemplate.FORM_TEMPLATE_ID];
  /**
   * Mapping of all key field names to the respective static field property FormTemplate.
   */
  export const _keys: { [keys: string]: Selectable<FormTemplate> } = FormTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<FormTemplate> }, field: Selectable<FormTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
