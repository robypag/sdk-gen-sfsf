import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeUrl
 */
export interface ThemeUrl {
    /**
     * value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeUrl.build]] instead.
 */
export declare function createThemeUrl(json: any): ThemeUrl;
/**
 * ThemeUrlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeUrlField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeUrl.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeUrl {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeUrl;
}
//# sourceMappingURL=ThemeUrl.d.ts.map