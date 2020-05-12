import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeNavigationConfig
 */
export interface ThemeNavigationConfig {
    /**
     * activeTextColor.
     * @nullable
     */
    activeTextColor?: ThemeColor;
    /**
     * allowCondensedView.
     * @nullable
     */
    allowCondensedView?: boolean;
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
 * @deprecated since v1.6.0. Use [[ThemeNavigationConfig.build]] instead.
 */
export declare function createThemeNavigationConfig(json: any): ThemeNavigationConfig;
/**
 * ThemeNavigationConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeNavigationConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeNavigationConfig.activeTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeNavigationConfig.allowCondensedView]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowCondensedView: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeNavigationConfig.hoverTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeNavigationConfig.textColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeNavigationConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeNavigationConfig;
}
//# sourceMappingURL=ThemeNavigationConfig.d.ts.map