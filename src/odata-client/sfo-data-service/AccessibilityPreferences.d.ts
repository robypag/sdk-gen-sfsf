import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createAccessibilityPreferences(json: any): AccessibilityPreferences;
/**
 * AccessibilityPreferencesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccessibilityPreferencesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccessibilityPreferences.blindnessSupport]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blindnessSupport: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[AccessibilityPreferences.colorVisionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    colorVisionType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AccessibilityPreferences.keyboardOnlyNavigation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyboardOnlyNavigation: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[AccessibilityPreferences.lowVisionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lowVisionType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AccessibilityPreferences {
    function build(json: {
        [keys: string]: FieldType;
    }): AccessibilityPreferences;
}
//# sourceMappingURL=AccessibilityPreferences.d.ts.map