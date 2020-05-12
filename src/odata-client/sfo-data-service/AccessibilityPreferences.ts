/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * AccessibilityPreferences
 */
export interface AccessibilityPreferences {
  /**
   * blindnessSupport.
   * @nullable
   */
  blindnessSupport?: boolean;
  /**
   * colorVisionType.
   * @nullable
   */
  colorVisionType?: string;
  /**
   * keyboardOnlyNavigation.
   * @nullable
   */
  keyboardOnlyNavigation?: boolean;
  /**
   * lowVisionType.
   * @nullable
   */
  lowVisionType?: string;
}

/**
 * @deprecated since v1.6.0. Use [[AccessibilityPreferences.build]] instead.
 */
export function createAccessibilityPreferences(json: any): AccessibilityPreferences {
  return AccessibilityPreferences.build(json);
}

/**
 * AccessibilityPreferencesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccessibilityPreferencesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AccessibilityPreferences.blindnessSupport]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blindnessSupport: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('blindnessSupport', this, 'Edm.Boolean');
  /**
   * Representation of the [[AccessibilityPreferences.colorVisionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  colorVisionType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('colorVisionType', this, 'Edm.String');
  /**
   * Representation of the [[AccessibilityPreferences.keyboardOnlyNavigation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyboardOnlyNavigation: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('keyboardOnlyNavigation', this, 'Edm.Boolean');
  /**
   * Representation of the [[AccessibilityPreferences.lowVisionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lowVisionType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('lowVisionType', this, 'Edm.String');
}

export namespace AccessibilityPreferences {
  export function build(json: { [keys: string]: FieldType }): AccessibilityPreferences {
    return createComplexType(json, {
      blindnessSupport: (blindnessSupport: boolean) => ({ blindnessSupport: edmToTs(blindnessSupport, 'Edm.Boolean') }),
      colorVisionType: (colorVisionType: string) => ({ colorVisionType: edmToTs(colorVisionType, 'Edm.String') }),
      keyboardOnlyNavigation: (keyboardOnlyNavigation: boolean) => ({ keyboardOnlyNavigation: edmToTs(keyboardOnlyNavigation, 'Edm.Boolean') }),
      lowVisionType: (lowVisionType: string) => ({ lowVisionType: edmToTs(lowVisionType, 'Edm.String') })
    });
  }
}
