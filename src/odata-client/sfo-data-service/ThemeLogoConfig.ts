/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeLogoConfig
 */
export interface ThemeLogoConfig {
  /**
   * backdropColor.
   * @nullable
   */
  backdropColor?: ThemeColor;
  /**
   * position.
   * @nullable
   */
  position?: string;
  /**
   * url.
   * @nullable
   */
  url?: ThemeUrl;
  /**
   * useBackdrop.
   * @nullable
   */
  useBackdrop?: boolean;
  /**
   * useUploadedLogo.
   * @nullable
   */
  useUploadedLogo?: boolean;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLogoConfig.build]] instead.
 */
export function createThemeLogoConfig(json: any): ThemeLogoConfig {
  return ThemeLogoConfig.build(json);
}

/**
 * ThemeLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLogoConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLogoConfig.backdropColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backdropColor: ThemeColorField<EntityT> = new ThemeColorField('backdropColor', this);
  /**
   * Representation of the [[ThemeLogoConfig.position]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  position: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('position', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLogoConfig.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ThemeUrlField<EntityT> = new ThemeUrlField('url', this);
  /**
   * Representation of the [[ThemeLogoConfig.useBackdrop]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useBackdrop: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useBackdrop', this, 'Edm.Boolean');
  /**
   * Representation of the [[ThemeLogoConfig.useUploadedLogo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useUploadedLogo: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useUploadedLogo', this, 'Edm.Boolean');
}

export namespace ThemeLogoConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLogoConfig {
    return createComplexType(json, {
      backdropColor: (backdropColor: ThemeColor) => ({ backdropColor: ThemeColor.build(backdropColor) }),
      position: (position: string) => ({ position: edmToTs(position, 'Edm.String') }),
      url: (url: ThemeUrl) => ({ url: ThemeUrl.build(url) }),
      useBackdrop: (useBackdrop: boolean) => ({ useBackdrop: edmToTs(useBackdrop, 'Edm.Boolean') }),
      useUploadedLogo: (useUploadedLogo: boolean) => ({ useUploadedLogo: edmToTs(useUploadedLogo, 'Edm.Boolean') })
    });
  }
}
