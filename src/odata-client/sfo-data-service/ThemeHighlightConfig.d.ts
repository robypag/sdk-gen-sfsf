import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeHighlightConfig
 */
export interface ThemeHighlightConfig {
    /**
     * bgColor.
     * @nullable
     */
    bgColor?: ThemeColor;
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
}
/**
 * @deprecated since v1.6.0. Use [[ThemeHighlightConfig.build]] instead.
 */
export declare function createThemeHighlightConfig(json: any): ThemeHighlightConfig;
/**
 * ThemeHighlightConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeHighlightConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeHighlightConfig.bgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeHighlightConfig.iconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHighlightConfig.linkTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeHighlightConfig.textColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeHighlightConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeHighlightConfig;
}
//# sourceMappingURL=ThemeHighlightConfig.d.ts.map