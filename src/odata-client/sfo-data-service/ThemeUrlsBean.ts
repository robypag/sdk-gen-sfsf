/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeUrlsBean
 */
export interface ThemeUrlsBean {
  /**
   * baseUrl.
   * @nullable
   */
  baseUrl?: string;
  /**
   * configUrl.
   * @nullable
   */
  configUrl?: string;
  /**
   * cssUrl.
   * @nullable
   */
  cssUrl?: string;
  /**
   * ui5BaseThemeRootUrl.
   * @nullable
   */
  ui5BaseThemeRootUrl?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeUrlsBean.build]] instead.
 */
export function createThemeUrlsBean(json: any): ThemeUrlsBean {
  return ThemeUrlsBean.build(json);
}

/**
 * ThemeUrlsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeUrlsBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeUrlsBean.baseUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('baseUrl', this, 'Edm.String');
  /**
   * Representation of the [[ThemeUrlsBean.configUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  configUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('configUrl', this, 'Edm.String');
  /**
   * Representation of the [[ThemeUrlsBean.cssUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cssUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('cssUrl', this, 'Edm.String');
  /**
   * Representation of the [[ThemeUrlsBean.ui5BaseThemeRootUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ui5BaseThemeRootUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ui5BaseThemeRootUrl', this, 'Edm.String');
}

export namespace ThemeUrlsBean {
  export function build(json: { [keys: string]: FieldType }): ThemeUrlsBean {
    return createComplexType(json, {
      baseUrl: (baseUrl: string) => ({ baseUrl: edmToTs(baseUrl, 'Edm.String') }),
      configUrl: (configUrl: string) => ({ configUrl: edmToTs(configUrl, 'Edm.String') }),
      cssUrl: (cssUrl: string) => ({ cssUrl: edmToTs(cssUrl, 'Edm.String') }),
      ui5BaseThemeRootUrl: (ui5BaseThemeRootUrl: string) => ({ ui5BaseThemeRootUrl: edmToTs(ui5BaseThemeRootUrl, 'Edm.String') })
    });
  }
}
