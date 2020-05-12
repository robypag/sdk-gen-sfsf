import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeUrlsBean
 */
export interface ThemeUrlsBean {
    /**
     * baseUrl.
     * @nullable
     */
    baseUrl?: string;
    /**
     * configUrl.
     * @nullable
     */
    configUrl?: string;
    /**
     * cssUrl.
     * @nullable
     */
    cssUrl?: string;
    /**
     * ui5BaseThemeRootUrl.
     * @nullable
     */
    ui5BaseThemeRootUrl?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeUrlsBean.build]] instead.
 */
export declare function createThemeUrlsBean(json: any): ThemeUrlsBean;
/**
 * ThemeUrlsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeUrlsBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeUrlsBean.baseUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeUrlsBean.configUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    configUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeUrlsBean.cssUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cssUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeUrlsBean.ui5BaseThemeRootUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ui5BaseThemeRootUrl: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeUrlsBean {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeUrlsBean;
}
//# sourceMappingURL=ThemeUrlsBean.d.ts.map