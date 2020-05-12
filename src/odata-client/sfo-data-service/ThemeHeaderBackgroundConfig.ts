/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeHeaderBackgroundConfig
 */
export interface ThemeHeaderBackgroundConfig {
  /**
   * baseColor.
   * @nullable
   */
  baseColor?: ThemeColor;
  /**
   * bgOption.
   * @nullable
   */
  bgOption?: string;
  /**
   * imageHorizontalPosition.
   * @nullable
   */
  imageHorizontalPosition?: string;
  /**
   * imageRepeat.
   * @nullable
   */
  imageRepeat?: string;
  /**
   * imageVerticalPosition.
   * @nullable
   */
  imageVerticalPosition?: string;
  /**
   * styleOption.
   * @nullable
   */
  styleOption?: string;
  /**
   * url.
   * @nullable
   */
  url?: ThemeUrl;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeHeaderBackgroundConfig.build]] instead.
 */
export function createThemeHeaderBackgroundConfig(json: any): ThemeHeaderBackgroundConfig {
  return ThemeHeaderBackgroundConfig.build(json);
}

/**
 * ThemeHeaderBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeHeaderBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.baseColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseColor: ThemeColorField<EntityT> = new ThemeColorField('baseColor', this);
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.bgOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('bgOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.imageHorizontalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageHorizontalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.imageRepeat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageRepeat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageRepeat', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.imageVerticalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageVerticalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageVerticalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.styleOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  styleOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('styleOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHeaderBackgroundConfig.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ThemeUrlField<EntityT> = new ThemeUrlField('url', this);
}

export namespace ThemeHeaderBackgroundConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeHeaderBackgroundConfig {
    return createComplexType(json, {
      baseColor: (baseColor: ThemeColor) => ({ baseColor: ThemeColor.build(baseColor) }),
      bgOption: (bgOption: string) => ({ bgOption: edmToTs(bgOption, 'Edm.String') }),
      imageHorizontalPosition: (imageHorizontalPosition: string) => ({ imageHorizontalPosition: edmToTs(imageHorizontalPosition, 'Edm.String') }),
      imageRepeat: (imageRepeat: string) => ({ imageRepeat: edmToTs(imageRepeat, 'Edm.String') }),
      imageVerticalPosition: (imageVerticalPosition: string) => ({ imageVerticalPosition: edmToTs(imageVerticalPosition, 'Edm.String') }),
      styleOption: (styleOption: string) => ({ styleOption: edmToTs(styleOption, 'Edm.String') }),
      url: (url: ThemeUrl) => ({ url: ThemeUrl.build(url) })
    });
  }
}
