/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormJobRoleRequestBuilder } from './FormJobRoleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormJobRole" of service "SFOData".
 */
export class FormJobRole extends Entity implements FormJobRoleType {
  /**
   * Technical entity name for FormJobRole.
   */
  static _entityName = 'FormJobRole';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormJobRole.
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
   * order.
   */
  order!: number;
  /**
   * roleDesc.
   * @nullable
   */
  roleDesc?: string;
  /**
   * roleId.
   */
  roleId!: BigNumber;
  /**
   * roleName.
   */
  roleName!: string;

  /**
   * Returns an entity builder to construct instances `FormJobRole`.
   * @returns A builder that constructs instances of entity type `FormJobRole`.
   */
  static builder(): EntityBuilderType<FormJobRole, FormJobRoleTypeForceMandatory> {
    return Entity.entityBuilder(FormJobRole);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormJobRole` entity type.
   * @returns A `FormJobRole` request builder.
   */
  static requestBuilder(): FormJobRoleRequestBuilder {
    return new FormJobRoleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormJobRole`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormJobRole`.
   */
  static customField(fieldName: string): CustomField<FormJobRole> {
    return Entity.customFieldSelector(fieldName, FormJobRole);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FormJobRoleType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  order: number;
  roleDesc?: string;
  roleId: BigNumber;
  roleName: string;
}

export interface FormJobRoleTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  order: number;
  roleDesc: string;
  roleId: BigNumber;
  roleName: string;
}

export namespace FormJobRole {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<FormJobRole> = new BigNumberField('formContentId', FormJobRole, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<FormJobRole> = new BigNumberField('formDataId', FormJobRole, 'Edm.Int64');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: NumberField<FormJobRole> = new NumberField('order', FormJobRole, 'Edm.Int32');
  /**
   * Static representation of the [[roleDesc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_DESC: StringField<FormJobRole> = new StringField('roleDesc', FormJobRole, 'Edm.String');
  /**
   * Static representation of the [[roleId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ID: BigNumberField<FormJobRole> = new BigNumberField('roleId', FormJobRole, 'Edm.Int64');
  /**
   * Static representation of the [[roleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_NAME: StringField<FormJobRole> = new StringField('roleName', FormJobRole, 'Edm.String');
  /**
   * All fields of the FormJobRole entity.
   */
  export const _allFields: Array<BigNumberField<FormJobRole> | NumberField<FormJobRole> | StringField<FormJobRole>> = [
    FormJobRole.FORM_CONTENT_ID,
    FormJobRole.FORM_DATA_ID,
    FormJobRole.ORDER,
    FormJobRole.ROLE_DESC,
    FormJobRole.ROLE_ID,
    FormJobRole.ROLE_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormJobRole> = new AllFields('*', FormJobRole);
  /**
   * All key fields of the FormJobRole entity.
   */
  export const _keyFields: Array<Selectable<FormJobRole>> = [FormJobRole.FORM_CONTENT_ID, FormJobRole.FORM_DATA_ID, FormJobRole.ROLE_ID];
  /**
   * Mapping of all key field names to the respective static field property FormJobRole.
   */
  export const _keys: { [keys: string]: Selectable<FormJobRole> } = FormJobRole._keyFields.reduce((acc: { [keys: string]: Selectable<FormJobRole> }, field: Selectable<FormJobRole>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
