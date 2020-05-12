import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeContentConfig
 */
export interface ThemeContentConfig {
    /**
     * bgColor.
     * @nullable
     */
    bgColor?: ThemeColor;
    /**
     * bgColorVariant.
     * @nullable
     */
    bgColorVariant?: ThemeColor;
    /**
     * iconScheme.
     * @nullable
     */
    iconScheme?: string;
    /**
     * linkTextColor.
     * @nullable
     */
    linkTextColor?: ThemeColor;
    /**
     * textColor.
     * @nullable
     */
    textColor?: ThemeColor;
    /**
     * textColorVariant.
     * @nullable
     */
    textColorVariant?: ThemeColor;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeContentConfig.build]] instead.
 */
export declare function createThemeContentConfig(json: any): ThemeContentConfig;
/**
 * ThemeContentConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeContentConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeContentConfig.bgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeContentConfig.bgColorVariant]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgColorVariant: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeContentConfig.iconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeContentConfig.linkTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeContentConfig.textColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeContentConfig.textColorVariant]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColorVariant: ThemeColorField<EntityT>;
}
export declare namespace ThemeContentConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeContentConfig;
}
//# sourceMappingURL=ThemeContentConfig.d.ts.map