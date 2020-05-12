/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormJobDescSectionRequestBuilder } from './FormJobDescSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormJobDescSection" of service "SFOData".
 */
export class FormJobDescSection extends Entity implements FormJobDescSectionType {
  /**
   * Technical entity name for FormJobDescSection.
   */
  static _entityName = 'FormJobDescSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormJobDescSection.
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
   * One-to-many navigation property to the [[FormJobRole]] entity.
   */
  jobRoles!: FormJobRole[];

  /**
   * Returns an entity builder to construct instances `FormJobDescSection`.
   * @returns A builder that constructs instances of entity type `FormJobDescSection`.
   */
  static builder(): EntityBuilderType<FormJobDescSection, FormJobDescSectionTypeForceMandatory> {
    return Entity.entityBuilder(FormJobDescSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormJobDescSection` entity type.
   * @returns A `FormJobDescSection` request builder.
   */
  static requestBuilder(): FormJobDescSectionRequestBuilder {
    return new FormJobDescSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobDescSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormJobDescSection`.
   */
  static customField(fieldName: string): CustomField<FormJobDescSection> {
    return Entity.customFieldSelector(fieldName, FormJobDescSection);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormJobRole, FormJobRoleType } from './FormJobRole';

export interface FormJobDescSectionType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription?: string;
  sectionIndex: number;
  sectionName: string;
  jobRoles: FormJobRoleType[];
}

export interface FormJobDescSectionTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  jobRoles: FormJobRoleType[];
}

export namespace FormJobDescSection {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormJobDescSection> = new BigNumberField('formContentId', FormJobDescSection, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormJobDescSection> = new BigNumberField('formDataId', FormJobDescSection, 'Edm.Int64');
  /**
   * Static representation of the [[sectionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_DESCRIPTION: StringField<FormJobDescSection> = new StringField('sectionDescription', FormJobDescSection, 'Edm.String');
  /**
   * Static representation of the [[sectionIndex]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_INDEX: NumberField<FormJobDescSection> = new NumberField('sectionIndex', FormJobDescSection, 'Edm.Int32');
  /**
   * Static representation of the [[sectionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_NAME: StringField<FormJobDescSection> = new StringField('sectionName', FormJobDescSection, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[jobRoles]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ROLES: Link<FormJobDescSection, FormJobRole> = new Link('jobRoles', FormJobDescSection, FormJobRole);
  /**
   * All fields of the FormJobDescSection entity.
   */
  export const _allFields: Array<BigNumberField<FormJobDescSection> | StringField<FormJobDescSection> | NumberField<FormJobDescSection> | Link<FormJobDescSection, FormJobRole>> = [
    FormJobDescSection.FORM_CONTENT_ID,
    FormJobDescSection.FORM_DATA_ID,
    FormJobDescSection.SECTION_DESCRIPTION,
    FormJobDescSection.SECTION_INDEX,
    FormJobDescSection.SECTION_NAME,
    FormJobDescSection.JOB_ROLES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormJobDescSection> = new AllFields('*', FormJobDescSection);
  /**
   * All key fields of the FormJobDescSection entity.
   */
  export const _keyFields: Array<Selectable<FormJobDescSection>> = [FormJobDescSection.FORM_CONTENT_ID, FormJobDescSection.FORM_DATA_ID, FormJobDescSection.SECTION_INDEX];
  /**
   * Mapping of all key field names to the respective static field property FormJobDescSection.
   */
  export const _keys: { [keys: string]: Selectable<FormJobDescSection> } = FormJobDescSection._keyFields.reduce((acc: { [keys: string]: Selectable<FormJobDescSection> }, field: Selectable<FormJobDescSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
