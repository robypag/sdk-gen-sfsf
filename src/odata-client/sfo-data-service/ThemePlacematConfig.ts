/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemePlacematConfig
 */
export interface ThemePlacematConfig {
  /**
   * backgroundType.
   * @nullable
   */
  backgroundType?: string;
  /**
   * bgColor.
   * @nullable
   */
  bgColor?: ThemeColor;
  /**
   * borderColor.
   * @nullable
   */
  borderColor?: ThemeColor;
  /**
   * linkColor.
   * @nullable
   */
  linkColor?: ThemeColor;
  /**
   * opacity.
   * @nullable
   */
  opacity?: number;
  /**
   * selectedTabColor.
   * @nullable
   */
  selectedTabColor?: ThemeColor;
  /**
   * useShadow.
   * @nullable
   */
  useShadow?: boolean;
}

/**
 * @deprecated since v1.6.0. Use [[ThemePlacematConfig.build]] instead.
 */
export function createThemePlacematConfig(json: any): ThemePlacematConfig {
  return ThemePlacematConfig.build(json);
}

/**
 * ThemePlacematConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemePlacematConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemePlacematConfig.backgroundType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('backgroundType', this, 'Edm.String');
  /**
   * Representation of the [[ThemePlacematConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemePlacematConfig.borderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderColor: ThemeColorField<EntityT> = new ThemeColorField('borderColor', this);
  /**
   * Representation of the [[ThemePlacematConfig.linkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkColor: ThemeColorField<EntityT> = new ThemeColorField('linkColor', this);
  /**
   * Representation of the [[ThemePlacematConfig.opacity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  opacity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('opacity', this, 'Edm.Double');
  /**
   * Representation of the [[ThemePlacematConfig.selectedTabColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selectedTabColor: ThemeColorField<EntityT> = new ThemeColorField('selectedTabColor', this);
  /**
   * Representation of the [[ThemePlacematConfig.useShadow]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useShadow: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useShadow', this, 'Edm.Boolean');
}

export namespace ThemePlacematConfig {
  export function build(json: { [keys: string]: FieldType }): ThemePlacematConfig {
    return createComplexType(json, {
      backgroundType: (backgroundType: string) => ({ backgroundType: edmToTs(backgroundType, 'Edm.String') }),
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      borderColor: (borderColor: ThemeColor) => ({ borderColor: ThemeColor.build(borderColor) }),
      linkColor: (linkColor: ThemeColor) => ({ linkColor: ThemeColor.build(linkColor) }),
      opacity: (opacity: number) => ({ opacity: edmToTs(opacity, 'Edm.Double') }),
      selectedTabColor: (selectedTabColor: ThemeColor) => ({ selectedTabColor: ThemeColor.build(selectedTabColor) }),
      useShadow: (useShadow: boolean) => ({ useShadow: edmToTs(useShadow, 'Edm.Boolean') })
    });
  }
}
