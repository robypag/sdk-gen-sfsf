/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeModulePickerConfig
 */
export interface ThemeModulePickerConfig {
  /**
   * activeHeaderBgColor.
   * @nullable
   */
  activeHeaderBgColor?: ThemeColor;
  /**
   * activeHeaderTextColor.
   * @nullable
   */
  activeHeaderTextColor?: ThemeColor;
  /**
   * boxBorderColor.
   * @nullable
   */
  boxBorderColor?: ThemeColor;
  /**
   * deriveColors.
   * @nullable
   */
  deriveColors?: boolean;
  /**
   * headerTextColor.
   * @nullable
   */
  headerTextColor?: ThemeColor;
  /**
   * hoverHeaderBgColor.
   * @nullable
   */
  hoverHeaderBgColor?: ThemeColor;
  /**
   * hoverHeaderTextColor.
   * @nullable
   */
  hoverHeaderTextColor?: ThemeColor;
  /**
   * iconTextColor.
   * @nullable
   */
  iconTextColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeModulePickerConfig.build]] instead.
 */
export function createThemeModulePickerConfig(json: any): ThemeModulePickerConfig {
  return ThemeModulePickerConfig.build(json);
}

/**
 * ThemeModulePickerConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeModulePickerConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeModulePickerConfig.activeHeaderBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeHeaderBgColor: ThemeColorField<EntityT> = new ThemeColorField('activeHeaderBgColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.activeHeaderTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeHeaderTextColor: ThemeColorField<EntityT> = new ThemeColorField('activeHeaderTextColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.boxBorderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boxBorderColor: ThemeColorField<EntityT> = new ThemeColorField('boxBorderColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.deriveColors]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deriveColors: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('deriveColors', this, 'Edm.Boolean');
  /**
   * Representation of the [[ThemeModulePickerConfig.headerTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerTextColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.hoverHeaderBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverHeaderBgColor: ThemeColorField<EntityT> = new ThemeColorField('hoverHeaderBgColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.hoverHeaderTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverHeaderTextColor: ThemeColorField<EntityT> = new ThemeColorField('hoverHeaderTextColor', this);
  /**
   * Representation of the [[ThemeModulePickerConfig.iconTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iconTextColor: ThemeColorField<EntityT> = new ThemeColorField('iconTextColor', this);
}

export namespace ThemeModulePickerConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeModulePickerConfig {
    return createComplexType(json, {
      activeHeaderBgColor: (activeHeaderBgColor: ThemeColor) => ({ activeHeaderBgColor: ThemeColor.build(activeHeaderBgColor) }),
      activeHeaderTextColor: (activeHeaderTextColor: ThemeColor) => ({ activeHeaderTextColor: ThemeColor.build(activeHeaderTextColor) }),
      boxBorderColor: (boxBorderColor: ThemeColor) => ({ boxBorderColor: ThemeColor.build(boxBorderColor) }),
      deriveColors: (deriveColors: boolean) => ({ deriveColors: edmToTs(deriveColors, 'Edm.Boolean') }),
      headerTextColor: (headerTextColor: ThemeColor) => ({ headerTextColor: ThemeColor.build(headerTextColor) }),
      hoverHeaderBgColor: (hoverHeaderBgColor: ThemeColor) => ({ hoverHeaderBgColor: ThemeColor.build(hoverHeaderBgColor) }),
      hoverHeaderTextColor: (hoverHeaderTextColor: ThemeColor) => ({ hoverHeaderTextColor: ThemeColor.build(hoverHeaderTextColor) }),
      iconTextColor: (iconTextColor: ThemeColor) => ({ iconTextColor: ThemeColor.build(iconTextColor) })
    });
  }
}
