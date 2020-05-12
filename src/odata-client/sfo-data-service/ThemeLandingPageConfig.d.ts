import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeLandingPageConfig
 */
export interface ThemeLandingPageConfig {
    /**
     * themeId.
     * @nullable
     */
    themeId?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeLandingPageConfig.build]] instead.
 */
export declare function createThemeLandingPageConfig(json: any): ThemeLandingPageConfig;
/**
 * ThemeLandingPageConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeLandingPageConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeLandingPageConfig.themeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    themeId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeLandingPageConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeLandingPageConfig;
}
//# sourceMappingURL=ThemeLandingPageConfig.d.ts.map