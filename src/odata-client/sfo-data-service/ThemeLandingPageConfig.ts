/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeLandingPageConfig
 */
export interface ThemeLandingPageConfig {
  /**
   * themeId.
   * @nullable
   */
  themeId?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLandingPageConfig.build]] instead.
 */
export function createThemeLandingPageConfig(json: any): ThemeLandingPageConfig {
  return ThemeLandingPageConfig.build(json);
}

/**
 * ThemeLandingPageConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLandingPageConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLandingPageConfig.themeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  themeId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('themeId', this, 'Edm.String');
}

export namespace ThemeLandingPageConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLandingPageConfig {
    return createComplexType(json, {
      themeId: (themeId: string) => ({ themeId: edmToTs(themeId, 'Edm.String') })
    });
  }
}
