/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeBackgroundConfig
 */
export interface ThemeBackgroundConfig {
  /**
   * baseColor.
   * @nullable
   */
  baseColor?: ThemeColor;
  /**
   * imageHorizontalPosition.
   * @nullable
   */
  imageHorizontalPosition?: string;
  /**
   * imageOption.
   * @nullable
   */
  imageOption?: string;
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
   * lighting.
   * @nullable
   */
  lighting?: string;
  /**
   * texture.
   * @nullable
   */
  texture?: string;
  /**
   * url.
   * @nullable
   */
  url?: ThemeUrl;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeBackgroundConfig.build]] instead.
 */
export function createThemeBackgroundConfig(json: any): ThemeBackgroundConfig {
  return ThemeBackgroundConfig.build(json);
}

/**
 * ThemeBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeBackgroundConfig.baseColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseColor: ThemeColorField<EntityT> = new ThemeColorField('baseColor', this);
  /**
   * Representation of the [[ThemeBackgroundConfig.imageHorizontalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageHorizontalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.imageOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.imageRepeat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageRepeat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageRepeat', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.imageVerticalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageVerticalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageVerticalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.lighting]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lighting: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('lighting', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.texture]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  texture: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('texture', this, 'Edm.String');
  /**
   * Representation of the [[ThemeBackgroundConfig.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ThemeUrlField<EntityT> = new ThemeUrlField('url', this);
}

export namespace ThemeBackgroundConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeBackgroundConfig {
    return createComplexType(json, {
      baseColor: (baseColor: ThemeColor) => ({ baseColor: ThemeColor.build(baseColor) }),
      imageHorizontalPosition: (imageHorizontalPosition: string) => ({ imageHorizontalPosition: edmToTs(imageHorizontalPosition, 'Edm.String') }),
      imageOption: (imageOption: string) => ({ imageOption: edmToTs(imageOption, 'Edm.String') }),
      imageRepeat: (imageRepeat: string) => ({ imageRepeat: edmToTs(imageRepeat, 'Edm.String') }),
      imageVerticalPosition: (imageVerticalPosition: string) => ({ imageVerticalPosition: edmToTs(imageVerticalPosition, 'Edm.String') }),
      lighting: (lighting: string) => ({ lighting: edmToTs(lighting, 'Edm.String') }),
      texture: (texture: string) => ({ texture: edmToTs(texture, 'Edm.String') }),
      url: (url: ThemeUrl) => ({ url: ThemeUrl.build(url) })
    });
  }
}
