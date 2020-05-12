import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeFingerprintsBean
 */
export interface ThemeFingerprintsBean {
    /**
     * config.
     * @nullable
     */
    config?: string;
    /**
     * css.
     * @nullable
     */
    css?: string;
    /**
     * ui5BaseThemeRoot.
     * @nullable
     */
    ui5BaseThemeRoot?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeFingerprintsBean.build]] instead.
 */
export declare function createThemeFingerprintsBean(json: any): ThemeFingerprintsBean;
/**
 * ThemeFingerprintsBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeFingerprintsBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeFingerprintsBean.config]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    config: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeFingerprintsBean.css]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    css: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeFingerprintsBean.ui5BaseThemeRoot]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ui5BaseThemeRoot: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeFingerprintsBean {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeFingerprintsBean;
}
//# sourceMappingURL=ThemeFingerprintsBean.d.ts.map