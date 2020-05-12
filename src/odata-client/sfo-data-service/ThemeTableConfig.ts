/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * ThemeTableConfig
 */
export interface ThemeTableConfig {
  /**
   * altRowBgColor.
   * @nullable
   */
  altRowBgColor?: ThemeColor;
  /**
   * disabledRowCellBgColor.
   * @nullable
   */
  disabledRowCellBgColor?: ThemeColor;
  /**
   * headerBgColor.
   * @nullable
   */
  headerBgColor?: ThemeColor;
  /**
   * headerTextColor.
   * @nullable
   */
  headerTextColor?: ThemeColor;
  /**
   * hoverRowBgColor.
   * @nullable
   */
  hoverRowBgColor?: ThemeColor;
  /**
   * linkColor.
   * @nullable
   */
  linkColor?: ThemeColor;
  /**
   * rowBgColor.
   * @nullable
   */
  rowBgColor?: ThemeColor;
  /**
   * selectedRowBgColor.
   * @nullable
   */
  selectedRowBgColor?: ThemeColor;
  /**
   * selectedSortedRowBgColor.
   * @nullable
   */
  selectedSortedRowBgColor?: ThemeColor;
  /**
   * sortCellBgColor.
   * @nullable
   */
  sortCellBgColor?: ThemeColor;
  /**
   * textColor.
   * @nullable
   */
  textColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeTableConfig.build]] instead.
 */
export function createThemeTableConfig(json: any): ThemeTableConfig {
  return ThemeTableConfig.build(json);
}

/**
 * ThemeTableConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeTableConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeTableConfig.altRowBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altRowBgColor: ThemeColorField<EntityT> = new ThemeColorField('altRowBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.disabledRowCellBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  disabledRowCellBgColor: ThemeColorField<EntityT> = new ThemeColorField('disabledRowCellBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.headerBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerBgColor: ThemeColorField<EntityT> = new ThemeColorField('headerBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.headerTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerTextColor', this);
  /**
   * Representation of the [[ThemeTableConfig.hoverRowBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hoverRowBgColor: ThemeColorField<EntityT> = new ThemeColorField('hoverRowBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.linkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkColor: ThemeColorField<EntityT> = new ThemeColorField('linkColor', this);
  /**
   * Representation of the [[ThemeTableConfig.rowBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowBgColor: ThemeColorField<EntityT> = new ThemeColorField('rowBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.selectedRowBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selectedRowBgColor: ThemeColorField<EntityT> = new ThemeColorField('selectedRowBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.selectedSortedRowBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selectedSortedRowBgColor: ThemeColorField<EntityT> = new ThemeColorField('selectedSortedRowBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.sortCellBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortCellBgColor: ThemeColorField<EntityT> = new ThemeColorField('sortCellBgColor', this);
  /**
   * Representation of the [[ThemeTableConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
}

export namespace ThemeTableConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeTableConfig {
    return createComplexType(json, {
      altRowBgColor: (altRowBgColor: ThemeColor) => ({ altRowBgColor: ThemeColor.build(altRowBgColor) }),
      disabledRowCellBgColor: (disabledRowCellBgColor: ThemeColor) => ({ disabledRowCellBgColor: ThemeColor.build(disabledRowCellBgColor) }),
      headerBgColor: (headerBgColor: ThemeColor) => ({ headerBgColor: ThemeColor.build(headerBgColor) }),
      headerTextColor: (headerTextColor: ThemeColor) => ({ headerTextColor: ThemeColor.build(headerTextColor) }),
      hoverRowBgColor: (hoverRowBgColor: ThemeColor) => ({ hoverRowBgColor: ThemeColor.build(hoverRowBgColor) }),
      linkColor: (linkColor: ThemeColor) => ({ linkColor: ThemeColor.build(linkColor) }),
      rowBgColor: (rowBgColor: ThemeColor) => ({ rowBgColor: ThemeColor.build(rowBgColor) }),
      selectedRowBgColor: (selectedRowBgColor: ThemeColor) => ({ selectedRowBgColor: ThemeColor.build(selectedRowBgColor) }),
      selectedSortedRowBgColor: (selectedSortedRowBgColor: ThemeColor) => ({ selectedSortedRowBgColor: ThemeColor.build(selectedSortedRowBgColor) }),
      sortCellBgColor: (sortCellBgColor: ThemeColor) => ({ sortCellBgColor: ThemeColor.build(sortCellBgColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) })
    });
  }
}
