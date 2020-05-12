/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * ThemeMenuConfig
 */
export interface ThemeMenuConfig {
  /**
   * activeBgColor.
   * @nullable
   */
  activeBgColor?: ThemeColor;
  /**
   * activeTextColor.
   * @nullable
   */
  activeTextColor?: ThemeColor;
  /**
   * bgColor.
   * @nullable
   */
  bgColor?: ThemeColor;
  /**
   * hoverBgColor.
   * @nullable
   */
  hoverBgColor?: ThemeColor;
  /**
   * hoverBgColorDisabled.
   * @nullable
   */
  hoverBgColorDisabled?: ThemeColor;
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
  /**
   * textColorDisabled.
   * @nullable
   */
  textColorDisabled?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeMenuConfig.build]] instead.
 */
export function createThemeMenuConfig(json: any): ThemeMenuConfig {
  return ThemeMenuConfig.build(json);
}

/**
 * ThemeMenuConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeMenuConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeMenuConfig.activeBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeBgColor: ThemeColorField<EntityT> = new ThemeColorField('activeBgColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.activeTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeTextColor: ThemeColorField<EntityT> = new ThemeColorField('activeTextColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.hoverBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverBgColor: ThemeColorField<EntityT> = new ThemeColorField('hoverBgColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.hoverBgColorDisabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverBgColorDisabled: ThemeColorField<EntityT> = new ThemeColorField('hoverBgColorDisabled', this);
  /**
   * Representation of the [[ThemeMenuConfig.hoverTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverTextColor: ThemeColorField<EntityT> = new ThemeColorField('hoverTextColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
  /**
   * Representation of the [[ThemeMenuConfig.textColorDisabled]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColorDisabled: ThemeColorField<EntityT> = new ThemeColorField('textColorDisabled', this);
}

export namespace ThemeMenuConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeMenuConfig {
    return createComplexType(json, {
      activeBgColor: (activeBgColor: ThemeColor) => ({ activeBgColor: ThemeColor.build(activeBgColor) }),
      activeTextColor: (activeTextColor: ThemeColor) => ({ activeTextColor: ThemeColor.build(activeTextColor) }),
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      hoverBgColor: (hoverBgColor: ThemeColor) => ({ hoverBgColor: ThemeColor.build(hoverBgColor) }),
      hoverBgColorDisabled: (hoverBgColorDisabled: ThemeColor) => ({ hoverBgColorDisabled: ThemeColor.build(hoverBgColorDisabled) }),
      hoverTextColor: (hoverTextColor: ThemeColor) => ({ hoverTextColor: ThemeColor.build(hoverTextColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) }),
      textColorDisabled: (textColorDisabled: ThemeColor) => ({ textColorDisabled: ThemeColor.build(textColorDisabled) })
    });
  }
}
