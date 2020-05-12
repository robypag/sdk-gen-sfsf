/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FormFolderRequestBuilder } from './FormFolderRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FormFolder" of service "SFOData".
 */
export class FormFolder extends Entity implements FormFolderType {
  /**
   * Technical entity name for FormFolder.
   */
  static _entityName = 'FormFolder';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FormFolder.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * folderId.
   */
  folderId!: BigNumber;
  /**
   * folderName.
   */
  folderName!: string;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-many navigation property to the [[FormContent]] entity.
   */
  forms!: FormContent[];

  /**
   * Returns an entity builder to construct instances `FormFolder`.
   * @returns A builder that constructs instances of entity type `FormFolder`.
   */
  static builder(): EntityBuilderType<FormFolder, FormFolderTypeForceMandatory> {
    return Entity.entityBuilder(FormFolder);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FormFolder` entity type.
   * @returns A `FormFolder` request builder.
   */
  static requestBuilder(): FormFolderRequestBuilder {
    return new FormFolderRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormFolder`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FormFolder`.
   */
  static customField(fieldName: string): CustomField<FormFolder> {
    return Entity.customFieldSelector(fieldName, FormFolder);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormContent, FormContentType } from './FormContent';

export interface FormFolderType {
  folderId: BigNumber;
  folderName: string;
  userId: string;
  forms: FormContentType[];
}

export interface FormFolderTypeForceMandatory {
  folderId: BigNumber;
  folderName: string;
  userId: string;
  forms: FormContentType[];
}

export namespace FormFolder {
  /**
   * Static representation of the [[folderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLDER_ID: BigNumberField<FormFolder> = new BigNumberField('folderId', FormFolder, 'Edm.Int64');
  /**
   * Static representation of the [[folderName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLDER_NAME: StringField<FormFolder> = new StringField('folderName', FormFolder, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<FormFolder> = new StringField('userId', FormFolder, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[forms]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMS: Link<FormFolder, FormContent> = new Link('forms', FormFolder, FormContent);
  /**
   * All fields of the FormFolder entity.
   */
  export const _allFields: Array<BigNumberField<FormFolder> | StringField<FormFolder> | Link<FormFolder, FormContent>> = [
    FormFolder.FOLDER_ID,
    FormFolder.FOLDER_NAME,
    FormFolder.USER_ID,
    FormFolder.FORMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FormFolder> = new AllFields('*', FormFolder);
  /**
   * All key fields of the FormFolder entity.
   */
  export const _keyFields: Array<Selectable<FormFolder>> = [FormFolder.FOLDER_ID];
  /**
   * Mapping of all key field names to the respective static field property FormFolder.
   */
  export const _keys: { [keys: string]: Selectable<FormFolder> } = FormFolder._keyFields.reduce((acc: { [keys: string]: Selectable<FormFolder> }, field: Selectable<FormFolder>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
