/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeConfigRequestBuilder } from './ThemeConfigRequestBuilder';
import { GlobalThemeConfiguration, GlobalThemeConfigurationField } from './GlobalThemeConfiguration';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ThemeConfig" of service "SFOData".
 */
export class ThemeConfig extends Entity implements ThemeConfigType {
  /**
   * Technical entity name for ThemeConfig.
   */
  static _entityName = 'ThemeConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ThemeConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * id.
   */
  id!: string;
  /**
   * themeConfiguration.
   * @nullable
   */
  themeConfiguration?: GlobalThemeConfiguration;

  /**
   * Returns an entity builder to construct instances `ThemeConfig`.
   * @returns A builder that constructs instances of entity type `ThemeConfig`.
   */
  static builder(): EntityBuilderType<ThemeConfig, ThemeConfigTypeForceMandatory> {
    return Entity.entityBuilder(ThemeConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ThemeConfig` entity type.
   * @returns A `ThemeConfig` request builder.
   */
  static requestBuilder(): ThemeConfigRequestBuilder {
    return new ThemeConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ThemeConfig`.
   */
  static customField(fieldName: string): CustomField<ThemeConfig> {
    return Entity.customFieldSelector(fieldName, ThemeConfig);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ThemeConfigType {
  id: string;
  themeConfiguration?: GlobalThemeConfiguration;
}

export interface ThemeConfigTypeForceMandatory {
  id: string;
  themeConfiguration: GlobalThemeConfiguration;
}

export namespace ThemeConfig {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ThemeConfig> = new StringField('id', ThemeConfig, 'Edm.String');
  /**
   * Static representation of the [[themeConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THEME_CONFIGURATION: GlobalThemeConfigurationField<ThemeConfig> = new GlobalThemeConfigurationField('themeConfiguration', ThemeConfig);
  /**
   * All fields of the ThemeConfig entity.
   */
  export const _allFields: Array<StringField<ThemeConfig> | GlobalThemeConfigurationField<ThemeConfig>> = [
    ThemeConfig.ID,
    ThemeConfig.THEME_CONFIGURATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ThemeConfig> = new AllFields('*', ThemeConfig);
  /**
   * All key fields of the ThemeConfig entity.
   */
  export const _keyFields: Array<Selectable<ThemeConfig>> = [ThemeConfig.ID];
  /**
   * Mapping of all key field names to the respective static field property ThemeConfig.
   */
  export const _keys: { [keys: string]: Selectable<ThemeConfig> } = ThemeConfig._keyFields.reduce((acc: { [keys: string]: Selectable<ThemeConfig> }, field: Selectable<ThemeConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
