/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeLoginBackgroundConfig
 */
export interface ThemeLoginBackgroundConfig {
  /**
   * backgroundType.
   * @nullable
   */
  backgroundType?: string;
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
   * option.
   * @nullable
   */
  option?: string;
  /**
   * overlayOpacity.
   * @nullable
   */
  overlayOpacity?: number;
  /**
   * overlayOption.
   * @nullable
   */
  overlayOption?: string;
  /**
   * url.
   * @nullable
   */
  url?: ThemeUrl;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLoginBackgroundConfig.build]] instead.
 */
export function createThemeLoginBackgroundConfig(json: any): ThemeLoginBackgroundConfig {
  return ThemeLoginBackgroundConfig.build(json);
}

/**
 * ThemeLoginBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLoginBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.backgroundType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('backgroundType', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.baseColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseColor: ThemeColorField<EntityT> = new ThemeColorField('baseColor', this);
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.imageHorizontalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageHorizontalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.imageRepeat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageRepeat: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageRepeat', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.imageVerticalPosition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imageVerticalPosition: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('imageVerticalPosition', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.option]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  option: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('option', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.overlayOpacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overlayOpacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('overlayOpacity', this, 'Edm.Double');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.overlayOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  overlayOption: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('overlayOption', this, 'Edm.String');
  /**
   * Representation of the [[ThemeLoginBackgroundConfig.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ThemeUrlField<EntityT> = new ThemeUrlField('url', this);
}

export namespace ThemeLoginBackgroundConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLoginBackgroundConfig {
    return createComplexType(json, {
      backgroundType: (backgroundType: string) => ({ backgroundType: edmToTs(backgroundType, 'Edm.String') }),
      baseColor: (baseColor: ThemeColor) => ({ baseColor: ThemeColor.build(baseColor) }),
      imageHorizontalPosition: (imageHorizontalPosition: string) => ({ imageHorizontalPosition: edmToTs(imageHorizontalPosition, 'Edm.String') }),
      imageRepeat: (imageRepeat: string) => ({ imageRepeat: edmToTs(imageRepeat, 'Edm.String') }),
      imageVerticalPosition: (imageVerticalPosition: string) => ({ imageVerticalPosition: edmToTs(imageVerticalPosition, 'Edm.String') }),
      option: (option: string) => ({ option: edmToTs(option, 'Edm.String') }),
      overlayOpacity: (overlayOpacity: number) => ({ overlayOpacity: edmToTs(overlayOpacity, 'Edm.Double') }),
      overlayOption: (overlayOption: string) => ({ overlayOption: edmToTs(overlayOption, 'Edm.String') }),
      url: (url: ThemeUrl) => ({ url: ThemeUrl.build(url) })
    });
  }
}
