import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeLogoConfig
 */
export interface ThemeLogoConfig {
    /**
     * backdropColor.
     * @nullable
     */
    backdropColor?: ThemeColor;
    /**
     * position.
     * @nullable
     */
    position?: string;
    /**
     * url.
     * @nullable
     */
    url?: ThemeUrl;
    /**
     * useBackdrop.
     * @nullable
     */
    useBackdrop?: boolean;
    /**
     * useUploadedLogo.
     * @nullable
     */
    useUploadedLogo?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeLogoConfig.build]] instead.
 */
export declare function createThemeLogoConfig(json: any): ThemeLogoConfig;
/**
 * ThemeLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeLogoConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeLogoConfig.backdropColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backdropColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeLogoConfig.position]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    position: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLogoConfig.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ThemeUrlField<EntityT>;
    /**
     * Representation of the [[ThemeLogoConfig.useBackdrop]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useBackdrop: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLogoConfig.useUploadedLogo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useUploadedLogo: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace ThemeLogoConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeLogoConfig;
}
//# sourceMappingURL=ThemeLogoConfig.d.ts.map