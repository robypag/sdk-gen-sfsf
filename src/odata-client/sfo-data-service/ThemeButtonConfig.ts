/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeButtonConfig
 */
export interface ThemeButtonConfig {
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
   * borderWidth.
   * @nullable
   */
  borderWidth?: string;
  /**
   * disabledBgColor.
   * @nullable
   */
  disabledBgColor?: ThemeColor;
  /**
   * disabledBorderColor.
   * @nullable
   */
  disabledBorderColor?: ThemeColor;
  /**
   * disabledTextColor.
   * @nullable
   */
  disabledTextColor?: ThemeColor;
  /**
   * hoverBgColor.
   * @nullable
   */
  hoverBgColor?: ThemeColor;
  /**
   * hoverBorderColor.
   * @nullable
   */
  hoverBorderColor?: ThemeColor;
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
 * @deprecated since v1.6.0. Use [[ThemeButtonConfig.build]] instead.
 */
export function createThemeButtonConfig(json: any): ThemeButtonConfig {
  return ThemeButtonConfig.build(json);
}

/**
 * ThemeButtonConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeButtonConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeButtonConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.borderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderColor: ThemeColorField<EntityT> = new ThemeColorField('borderColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.borderWidth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderWidth: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('borderWidth', this, 'Edm.String');
  /**
   * Representation of the [[ThemeButtonConfig.disabledBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledBgColor: ThemeColorField<EntityT> = new ThemeColorField('disabledBgColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.disabledBorderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledBorderColor: ThemeColorField<EntityT> = new ThemeColorField('disabledBorderColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.disabledTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledTextColor: ThemeColorField<EntityT> = new ThemeColorField('disabledTextColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.hoverBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverBgColor: ThemeColorField<EntityT> = new ThemeColorField('hoverBgColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.hoverBorderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverBorderColor: ThemeColorField<EntityT> = new ThemeColorField('hoverBorderColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.hoverTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverTextColor: ThemeColorField<EntityT> = new ThemeColorField('hoverTextColor', this);
  /**
   * Representation of the [[ThemeButtonConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
}

export namespace ThemeButtonConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeButtonConfig {
    return createComplexType(json, {
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      borderColor: (borderColor: ThemeColor) => ({ borderColor: ThemeColor.build(borderColor) }),
      borderWidth: (borderWidth: string) => ({ borderWidth: edmToTs(borderWidth, 'Edm.String') }),
      disabledBgColor: (disabledBgColor: ThemeColor) => ({ disabledBgColor: ThemeColor.build(disabledBgColor) }),
      disabledBorderColor: (disabledBorderColor: ThemeColor) => ({ disabledBorderColor: ThemeColor.build(disabledBorderColor) }),
      disabledTextColor: (disabledTextColor: ThemeColor) => ({ disabledTextColor: ThemeColor.build(disabledTextColor) }),
      hoverBgColor: (hoverBgColor: ThemeColor) => ({ hoverBgColor: ThemeColor.build(hoverBgColor) }),
      hoverBorderColor: (hoverBorderColor: ThemeColor) => ({ hoverBorderColor: ThemeColor.build(hoverBorderColor) }),
      hoverTextColor: (hoverTextColor: ThemeColor) => ({ hoverTextColor: ThemeColor.build(hoverTextColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) })
    });
  }
}
