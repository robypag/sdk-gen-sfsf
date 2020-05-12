import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeColor
 */
export interface ThemeColor {
    /**
     * value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeColor.build]] instead.
 */
export declare function createThemeColor(json: any): ThemeColor;
/**
 * ThemeColorField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeColorField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeColor.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeColor {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeColor;
}
//# sourceMappingURL=ThemeColor.d.ts.map