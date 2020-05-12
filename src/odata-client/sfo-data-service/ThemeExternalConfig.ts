/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeExternalConfig
 */
export interface ThemeExternalConfig {
  /**
   * faviconOption.
   * @nullable
   */
  faviconOption?: string;
  /**
   * faviconUrl.
   * @nullable
   */
  faviconUrl?: ThemeUrl;
  /**
   * footerLogoOption.
   * @nullable
   */
  footerLogoOption?: string;
  /**
   * footerLogoUrl.
   * @nullable
   */
  footerLogoUrl?: ThemeUrl;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeExternalConfig.build]] instead.
 */
export function createThemeExternalConfig(json: any): ThemeExternalConfig {
  return ThemeExternalConfig.build(json);
}

/**
 * ThemeExternalConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeExternalConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeExternalConfig.faviconOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faviconOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('faviconOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeExternalConfig.faviconUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faviconUrl: ThemeUrlField<EntityT> = new ThemeUrlField('faviconUrl', this);
  /**
   * Representation of the [[ThemeExternalConfig.footerLogoOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  footerLogoOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('footerLogoOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeExternalConfig.footerLogoUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  footerLogoUrl: ThemeUrlField<EntityT> = new ThemeUrlField('footerLogoUrl', this);
}

export namespace ThemeExternalConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeExternalConfig {
    return createComplexType(json, {
      faviconOption: (faviconOption: string) => ({ faviconOption: edmToTs(faviconOption, 'Edm.String') }),
      faviconUrl: (faviconUrl: ThemeUrl) => ({ faviconUrl: ThemeUrl.build(faviconUrl) }),
      footerLogoOption: (footerLogoOption: string) => ({ footerLogoOption: edmToTs(footerLogoOption, 'Edm.String') }),
      footerLogoUrl: (footerLogoUrl: ThemeUrl) => ({ footerLogoUrl: ThemeUrl.build(footerLogoUrl) })
    });
  }
}
