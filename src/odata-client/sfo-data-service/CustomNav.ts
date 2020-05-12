/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomNavRequestBuilder } from './CustomNavRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CustomNav" of service "SFOData".
 */
export class CustomNav extends Entity implements CustomNavType {
  /**
   * Technical entity name for CustomNav.
   */
  static _entityName = 'CustomNav';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomNav.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * altText.
   * @nullable
   */
  altText?: string;
  /**
   * alwaysShow.
   * @nullable
   */
  alwaysShow?: boolean;
  /**
   * isModule.
   * @nullable
   */
  isModule?: boolean;
  /**
   * isSelected.
   * @nullable
   */
  isSelected?: boolean;
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * newWindow.
   * @nullable
   */
  newWindow?: boolean;
  /**
   * title.
   */
  title!: string;
  /**
   * url.
   * @nullable
   */
  url?: string;

  /**
   * Returns an entity builder to construct instances `CustomNav`.
   * @returns A builder that constructs instances of entity type `CustomNav`.
   */
  static builder(): EntityBuilderType<CustomNav, CustomNavTypeForceMandatory> {
    return Entity.entityBuilder(CustomNav);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomNav` entity type.
   * @returns A `CustomNav` request builder.
   */
  static requestBuilder(): CustomNavRequestBuilder {
    return new CustomNavRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomNav`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomNav`.
   */
  static customField(fieldName: string): CustomField<CustomNav> {
    return Entity.customFieldSelector(fieldName, CustomNav);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomNavType {
  altText?: string;
  alwaysShow?: boolean;
  isModule?: boolean;
  isSelected?: boolean;
  label?: string;
  newWindow?: boolean;
  title: string;
  url?: string;
}

export interface CustomNavTypeForceMandatory {
  altText: string;
  alwaysShow: boolean;
  isModule: boolean;
  isSelected: boolean;
  label: string;
  newWindow: boolean;
  title: string;
  url: string;
}

export namespace CustomNav {
  /**
   * Static representation of the [[altText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALT_TEXT: StringField<CustomNav> = new StringField('altText', CustomNav, 'Edm.String');
  /**
   * Static representation of the [[alwaysShow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALWAYS_SHOW: BooleanField<CustomNav> = new BooleanField('alwaysShow', CustomNav, 'Edm.Boolean');
  /**
   * Static representation of the [[isModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MODULE: BooleanField<CustomNav> = new BooleanField('isModule', CustomNav, 'Edm.Boolean');
  /**
   * Static representation of the [[isSelected]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SELECTED: BooleanField<CustomNav> = new BooleanField('isSelected', CustomNav, 'Edm.Boolean');
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: StringField<CustomNav> = new StringField('label', CustomNav, 'Edm.String');
  /**
   * Static representation of the [[newWindow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_WINDOW: BooleanField<CustomNav> = new BooleanField('newWindow', CustomNav, 'Edm.Boolean');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<CustomNav> = new StringField('title', CustomNav, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<CustomNav> = new StringField('url', CustomNav, 'Edm.String');
  /**
   * All fields of the CustomNav entity.
   */
  export const _allFields: Array<StringField<CustomNav> | BooleanField<CustomNav>> = [
    CustomNav.ALT_TEXT,
    CustomNav.ALWAYS_SHOW,
    CustomNav.IS_MODULE,
    CustomNav.IS_SELECTED,
    CustomNav.LABEL,
    CustomNav.NEW_WINDOW,
    CustomNav.TITLE,
    CustomNav.URL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomNav> = new AllFields('*', CustomNav);
  /**
   * All key fields of the CustomNav entity.
   */
  export const _keyFields: Array<Selectable<CustomNav>> = [CustomNav.TITLE];
  /**
   * Mapping of all key field names to the respective static field property CustomNav.
   */
  export const _keys: { [keys: string]: Selectable<CustomNav> } = CustomNav._keyFields.reduce((acc: { [keys: string]: Selectable<CustomNav> }, field: Selectable<CustomNav>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
