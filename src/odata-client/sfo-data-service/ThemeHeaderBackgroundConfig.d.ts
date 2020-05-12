import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeHeaderBackgroundConfig
 */
export interface ThemeHeaderBackgroundConfig {
    /**
     * baseColor.
     * @nullable
     */
    baseColor?: ThemeColor;
    /**
     * bgOption.
     * @nullable
     */
    bgOption?: string;
    /**
     * imageHorizontalPosition.
     * @nullable
     */
    imageHorizontalPosition?: string;
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
     * styleOption.
     * @nullable
     */
    styleOption?: string;
    /**
     * url.
     * @nullable
     */
    url?: ThemeUrl;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeHeaderBackgroundConfig.build]] instead.
 */
export declare function createThemeHeaderBackgroundConfig(json: any): ThemeHeaderBackgroundConfig;
/**
 * ThemeHeaderBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeHeaderBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.baseColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.bgOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.imageHorizontalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.imageRepeat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageRepeat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.imageVerticalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageVerticalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.styleOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    styleOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeHeaderBackgroundConfig.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ThemeUrlField<EntityT>;
}
export declare namespace ThemeHeaderBackgroundConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeHeaderBackgroundConfig;
}
//# sourceMappingURL=ThemeHeaderBackgroundConfig.d.ts.map