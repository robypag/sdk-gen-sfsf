import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeExternalConfig
 */
export interface ThemeExternalConfig {
    /**
     * faviconOption.
     * @nullable
     */
    faviconOption?: string;
    /**
     * faviconUrl.
     * @nullable
     */
    faviconUrl?: ThemeUrl;
    /**
     * footerLogoOption.
     * @nullable
     */
    footerLogoOption?: string;
    /**
     * footerLogoUrl.
     * @nullable
     */
    footerLogoUrl?: ThemeUrl;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeExternalConfig.build]] instead.
 */
export declare function createThemeExternalConfig(json: any): ThemeExternalConfig;
/**
 * ThemeExternalConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeExternalConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeExternalConfig.faviconOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faviconOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeExternalConfig.faviconUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    faviconUrl: ThemeUrlField<EntityT>;
    /**
     * Representation of the [[ThemeExternalConfig.footerLogoOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    footerLogoOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeExternalConfig.footerLogoUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    footerLogoUrl: ThemeUrlField<EntityT>;
}
export declare namespace ThemeExternalConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeExternalConfig;
}
//# sourceMappingURL=ThemeExternalConfig.d.ts.map