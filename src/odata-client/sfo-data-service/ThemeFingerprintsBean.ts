/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeFingerprintsBean
 */
export interface ThemeFingerprintsBean {
  /**
   * config.
   * @nullable
   */
  config?: string;
  /**
   * css.
   * @nullable
   */
  css?: string;
  /**
   * ui5BaseThemeRoot.
   * @nullable
   */
  ui5BaseThemeRoot?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeFingerprintsBean.build]] instead.
 */
export function createThemeFingerprintsBean(json: any): ThemeFingerprintsBean {
  return ThemeFingerprintsBean.build(json);
}

/**
 * ThemeFingerprintsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeFingerprintsBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeFingerprintsBean.config]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  config: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('config', this, 'Edm.String');
  /**
   * Representation of the [[ThemeFingerprintsBean.css]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  css: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('css', this, 'Edm.String');
  /**
   * Representation of the [[ThemeFingerprintsBean.ui5BaseThemeRoot]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ui5BaseThemeRoot: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ui5BaseThemeRoot', this, 'Edm.String');
}

export namespace ThemeFingerprintsBean {
  export function build(json: { [keys: string]: FieldType }): ThemeFingerprintsBean {
    return createComplexType(json, {
      config: (config: string) => ({ config: edmToTs(config, 'Edm.String') }),
      css: (css: string) => ({ css: edmToTs(css, 'Edm.String') }),
      ui5BaseThemeRoot: (ui5BaseThemeRoot: string) => ({ ui5BaseThemeRoot: edmToTs(ui5BaseThemeRoot, 'Edm.String') })
    });
  }
}
