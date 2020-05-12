import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeFooterConfig
 */
export interface ThemeFooterConfig {
    /**
     * logoScheme.
     * @nullable
     */
    logoScheme?: string;
    /**
     * textColor.
     * @nullable
     */
    textColor?: ThemeColor;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeFooterConfig.build]] instead.
 */
export declare function createThemeFooterConfig(json: any): ThemeFooterConfig;
/**
 * ThemeFooterConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeFooterConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeFooterConfig.logoScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logoScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeFooterConfig.textColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeFooterConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeFooterConfig;
}
//# sourceMappingURL=ThemeFooterConfig.d.ts.map