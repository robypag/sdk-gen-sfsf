/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * ThemeDiagramConfig
 */
export interface ThemeDiagramConfig {
  /**
   * backgroundColor.
   * @nullable
   */
  backgroundColor?: ThemeColor;
  /**
   * lineColor.
   * @nullable
   */
  lineColor?: ThemeColor;
  /**
   * negativeThresholdColor.
   * @nullable
   */
  negativeThresholdColor?: ThemeColor;
  /**
   * neutralThresholdColor.
   * @nullable
   */
  neutralThresholdColor?: ThemeColor;
  /**
   * paletteColor10.
   * @nullable
   */
  paletteColor10?: ThemeColor;
  /**
   * paletteColor2.
   * @nullable
   */
  paletteColor2?: ThemeColor;
  /**
   * paletteColor3.
   * @nullable
   */
  paletteColor3?: ThemeColor;
  /**
   * paletteColor4.
   * @nullable
   */
  paletteColor4?: ThemeColor;
  /**
   * paletteColor5.
   * @nullable
   */
  paletteColor5?: ThemeColor;
  /**
   * paletteColor6.
   * @nullable
   */
  paletteColor6?: ThemeColor;
  /**
   * paletteColor7.
   * @nullable
   */
  paletteColor7?: ThemeColor;
  /**
   * paletteColor8.
   * @nullable
   */
  paletteColor8?: ThemeColor;
  /**
   * paletteColor9.
   * @nullable
   */
  paletteColor9?: ThemeColor;
  /**
   * positiveThresholdColor.
   * @nullable
   */
  positiveThresholdColor?: ThemeColor;
  /**
   * primaryColor.
   * @nullable
   */
  primaryColor?: ThemeColor;
  /**
   * textColor.
   * @nullable
   */
  textColor?: ThemeColor;
  /**
   * titleColor.
   * @nullable
   */
  titleColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeDiagramConfig.build]] instead.
 */
export function createThemeDiagramConfig(json: any): ThemeDiagramConfig {
  return ThemeDiagramConfig.build(json);
}

/**
 * ThemeDiagramConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeDiagramConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeDiagramConfig.backgroundColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundColor: ThemeColorField<EntityT> = new ThemeColorField('backgroundColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.lineColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineColor: ThemeColorField<EntityT> = new ThemeColorField('lineColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.negativeThresholdColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  negativeThresholdColor: ThemeColorField<EntityT> = new ThemeColorField('negativeThresholdColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.neutralThresholdColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  neutralThresholdColor: ThemeColorField<EntityT> = new ThemeColorField('neutralThresholdColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor10]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor10: ThemeColorField<EntityT> = new ThemeColorField('paletteColor10', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor2: ThemeColorField<EntityT> = new ThemeColorField('paletteColor2', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor3: ThemeColorField<EntityT> = new ThemeColorField('paletteColor3', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor4: ThemeColorField<EntityT> = new ThemeColorField('paletteColor4', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor5: ThemeColorField<EntityT> = new ThemeColorField('paletteColor5', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor6]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor6: ThemeColorField<EntityT> = new ThemeColorField('paletteColor6', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor7]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor7: ThemeColorField<EntityT> = new ThemeColorField('paletteColor7', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor8]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor8: ThemeColorField<EntityT> = new ThemeColorField('paletteColor8', this);
  /**
   * Representation of the [[ThemeDiagramConfig.paletteColor9]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paletteColor9: ThemeColorField<EntityT> = new ThemeColorField('paletteColor9', this);
  /**
   * Representation of the [[ThemeDiagramConfig.positiveThresholdColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  positiveThresholdColor: ThemeColorField<EntityT> = new ThemeColorField('positiveThresholdColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.primaryColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryColor: ThemeColorField<EntityT> = new ThemeColorField('primaryColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
  /**
   * Representation of the [[ThemeDiagramConfig.titleColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  titleColor: ThemeColorField<EntityT> = new ThemeColorField('titleColor', this);
}

export namespace ThemeDiagramConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeDiagramConfig {
    return createComplexType(json, {
      backgroundColor: (backgroundColor: ThemeColor) => ({ backgroundColor: ThemeColor.build(backgroundColor) }),
      lineColor: (lineColor: ThemeColor) => ({ lineColor: ThemeColor.build(lineColor) }),
      negativeThresholdColor: (negativeThresholdColor: ThemeColor) => ({ negativeThresholdColor: ThemeColor.build(negativeThresholdColor) }),
      neutralThresholdColor: (neutralThresholdColor: ThemeColor) => ({ neutralThresholdColor: ThemeColor.build(neutralThresholdColor) }),
      paletteColor10: (paletteColor10: ThemeColor) => ({ paletteColor10: ThemeColor.build(paletteColor10) }),
      paletteColor2: (paletteColor2: ThemeColor) => ({ paletteColor2: ThemeColor.build(paletteColor2) }),
      paletteColor3: (paletteColor3: ThemeColor) => ({ paletteColor3: ThemeColor.build(paletteColor3) }),
      paletteColor4: (paletteColor4: ThemeColor) => ({ paletteColor4: ThemeColor.build(paletteColor4) }),
      paletteColor5: (paletteColor5: ThemeColor) => ({ paletteColor5: ThemeColor.build(paletteColor5) }),
      paletteColor6: (paletteColor6: ThemeColor) => ({ paletteColor6: ThemeColor.build(paletteColor6) }),
      paletteColor7: (paletteColor7: ThemeColor) => ({ paletteColor7: ThemeColor.build(paletteColor7) }),
      paletteColor8: (paletteColor8: ThemeColor) => ({ paletteColor8: ThemeColor.build(paletteColor8) }),
      paletteColor9: (paletteColor9: ThemeColor) => ({ paletteColor9: ThemeColor.build(paletteColor9) }),
      positiveThresholdColor: (positiveThresholdColor: ThemeColor) => ({ positiveThresholdColor: ThemeColor.build(positiveThresholdColor) }),
      primaryColor: (primaryColor: ThemeColor) => ({ primaryColor: ThemeColor.build(primaryColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) }),
      titleColor: (titleColor: ThemeColor) => ({ titleColor: ThemeColor.build(titleColor) })
    });
  }
}
