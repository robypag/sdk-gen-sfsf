/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeTemplateRequestBuilder } from './ThemeTemplateRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ThemeTemplate" of service "SFOData".
 */
export class ThemeTemplate extends Entity implements ThemeTemplateType {
  /**
   * Technical entity name for ThemeTemplate.
   */
  static _entityName = 'ThemeTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ThemeTemplate.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * bodyStyleClass.
   * @nullable
   */
  bodyStyleClass?: string;
  /**
   * footer.
   * @nullable
   */
  footer?: string;
  /**
   * header.
   * @nullable
   */
  header?: string;
  /**
   * id.
   */
  id!: string;
  /**
   * langDir.
   * @nullable
   */
  langDir?: string;
  /**
   * locale.
   * @nullable
   */
  locale?: string;
  /**
   * scripts.
   * @nullable
   */
  scripts?: string;
  /**
   * styles.
   * @nullable
   */
  styles?: string;
  /**
   * template.
   * @nullable
   */
  template?: string;
  /**
   * ui5BaseThemeRootUrl.
   * @nullable
   */
  ui5BaseThemeRootUrl?: string;

  /**
   * Returns an entity builder to construct instances `ThemeTemplate`.
   * @returns A builder that constructs instances of entity type `ThemeTemplate`.
   */
  static builder(): EntityBuilderType<ThemeTemplate, ThemeTemplateTypeForceMandatory> {
    return Entity.entityBuilder(ThemeTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ThemeTemplate` entity type.
   * @returns A `ThemeTemplate` request builder.
   */
  static requestBuilder(): ThemeTemplateRequestBuilder {
    return new ThemeTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ThemeTemplate`.
   */
  static customField(fieldName: string): CustomField<ThemeTemplate> {
    return Entity.customFieldSelector(fieldName, ThemeTemplate);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ThemeTemplateType {
  bodyStyleClass?: string;
  footer?: string;
  header?: string;
  id: string;
  langDir?: string;
  locale?: string;
  scripts?: string;
  styles?: string;
  template?: string;
  ui5BaseThemeRootUrl?: string;
}

export interface ThemeTemplateTypeForceMandatory {
  bodyStyleClass: string;
  footer: string;
  header: string;
  id: string;
  langDir: string;
  locale: string;
  scripts: string;
  styles: string;
  template: string;
  ui5BaseThemeRootUrl: string;
}

export namespace ThemeTemplate {
  /**
   * Static representation of the [[bodyStyleClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BODY_STYLE_CLASS: StringField<ThemeTemplate> = new StringField('bodyStyleClass', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[footer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER: StringField<ThemeTemplate> = new StringField('footer', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[header]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER: StringField<ThemeTemplate> = new StringField('header', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ThemeTemplate> = new StringField('id', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[langDir]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANG_DIR: StringField<ThemeTemplate> = new StringField('langDir', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<ThemeTemplate> = new StringField('locale', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[scripts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCRIPTS: StringField<ThemeTemplate> = new StringField('scripts', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[styles]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STYLES: StringField<ThemeTemplate> = new StringField('styles', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[template]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE: StringField<ThemeTemplate> = new StringField('template', ThemeTemplate, 'Edm.String');
  /**
   * Static representation of the [[ui5BaseThemeRootUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UI_5_BASE_THEME_ROOT_URL: StringField<ThemeTemplate> = new StringField('ui5BaseThemeRootUrl', ThemeTemplate, 'Edm.String');
  /**
   * All fields of the ThemeTemplate entity.
   */
  export const _allFields: Array<StringField<ThemeTemplate>> = [
    ThemeTemplate.BODY_STYLE_CLASS,
    ThemeTemplate.FOOTER,
    ThemeTemplate.HEADER,
    ThemeTemplate.ID,
    ThemeTemplate.LANG_DIR,
    ThemeTemplate.LOCALE,
    ThemeTemplate.SCRIPTS,
    ThemeTemplate.STYLES,
    ThemeTemplate.TEMPLATE,
    ThemeTemplate.UI_5_BASE_THEME_ROOT_URL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ThemeTemplate> = new AllFields('*', ThemeTemplate);
  /**
   * All key fields of the ThemeTemplate entity.
   */
  export const _keyFields: Array<Selectable<ThemeTemplate>> = [ThemeTemplate.ID];
  /**
   * Mapping of all key field names to the respective static field property ThemeTemplate.
   */
  export const _keys: { [keys: string]: Selectable<ThemeTemplate> } = ThemeTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<ThemeTemplate> }, field: Selectable<ThemeTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
