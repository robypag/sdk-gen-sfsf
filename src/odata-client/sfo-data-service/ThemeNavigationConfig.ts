/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeNavigationConfig
 */
export interface ThemeNavigationConfig {
  /**
   * activeTextColor.
   * @nullable
   */
  activeTextColor?: ThemeColor;
  /**
   * allowCondensedView.
   * @nullable
   */
  allowCondensedView?: boolean;
  /**
   * hoverTextColor.
   * @nullable
   */
  hoverTextColor?: ThemeColor;
  /**
   * textColor.
   * @nullable
   */
  textColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeNavigationConfig.build]] instead.
 */
export function createThemeNavigationConfig(json: any): ThemeNavigationConfig {
  return ThemeNavigationConfig.build(json);
}

/**
 * ThemeNavigationConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeNavigationConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeNavigationConfig.activeTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeTextColor: ThemeColorField<EntityT> = new ThemeColorField('activeTextColor', this);
  /**
   * Representation of the [[ThemeNavigationConfig.allowCondensedView]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowCondensedView: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('allowCondensedView', this, 'Edm.Boolean');
  /**
   * Representation of the [[ThemeNavigationConfig.hoverTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverTextColor: ThemeColorField<EntityT> = new ThemeColorField('hoverTextColor', this);
  /**
   * Representation of the [[ThemeNavigationConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
}

export namespace ThemeNavigationConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeNavigationConfig {
    return createComplexType(json, {
      activeTextColor: (activeTextColor: ThemeColor) => ({ activeTextColor: ThemeColor.build(activeTextColor) }),
      allowCondensedView: (allowCondensedView: boolean) => ({ allowCondensedView: edmToTs(allowCondensedView, 'Edm.Boolean') }),
      hoverTextColor: (hoverTextColor: ThemeColor) => ({ hoverTextColor: ThemeColor.build(hoverTextColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) })
    });
  }
}
