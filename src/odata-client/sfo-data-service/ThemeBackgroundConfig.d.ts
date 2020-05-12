import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeBackgroundConfig
 */
export interface ThemeBackgroundConfig {
    /**
     * baseColor.
     * @nullable
     */
    baseColor?: ThemeColor;
    /**
     * imageHorizontalPosition.
     * @nullable
     */
    imageHorizontalPosition?: string;
    /**
     * imageOption.
     * @nullable
     */
    imageOption?: string;
    /**
     * imageRepeat.
     * @nullable
     */
    imageRepeat?: string;
    /**
     * imageVerticalPosition.
     * @nullable
     */
    imageVerticalPosition?: string;
    /**
     * lighting.
     * @nullable
     */
    lighting?: string;
    /**
     * texture.
     * @nullable
     */
    texture?: string;
    /**
     * url.
     * @nullable
     */
    url?: ThemeUrl;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeBackgroundConfig.build]] instead.
 */
export declare function createThemeBackgroundConfig(json: any): ThemeBackgroundConfig;
/**
 * ThemeBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeBackgroundConfig.baseColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.imageHorizontalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.imageOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.imageRepeat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageRepeat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.imageVerticalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageVerticalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.lighting]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lighting: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.texture]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    texture: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeBackgroundConfig.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ThemeUrlField<EntityT>;
}
export declare namespace ThemeBackgroundConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeBackgroundConfig;
}
//# sourceMappingURL=ThemeBackgroundConfig.d.ts.map