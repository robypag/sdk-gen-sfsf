import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemePlacematConfig
 */
export interface ThemePlacematConfig {
    /**
     * backgroundType.
     * @nullable
     */
    backgroundType?: string;
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
     * linkColor.
     * @nullable
     */
    linkColor?: ThemeColor;
    /**
     * opacity.
     * @nullable
     */
    opacity?: number;
    /**
     * selectedTabColor.
     * @nullable
     */
    selectedTabColor?: ThemeColor;
    /**
     * useShadow.
     * @nullable
     */
    useShadow?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[ThemePlacematConfig.build]] instead.
 */
export declare function createThemePlacematConfig(json: any): ThemePlacematConfig;
/**
 * ThemePlacematConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemePlacematConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemePlacematConfig.backgroundType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backgroundType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.bgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.borderColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.linkColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.opacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    opacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.selectedTabColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    selectedTabColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemePlacematConfig.useShadow]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useShadow: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace ThemePlacematConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemePlacematConfig;
}
//# sourceMappingURL=ThemePlacematConfig.d.ts.map