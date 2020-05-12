import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeModulePickerConfig
 */
export interface ThemeModulePickerConfig {
    /**
     * activeHeaderBgColor.
     * @nullable
     */
    activeHeaderBgColor?: ThemeColor;
    /**
     * activeHeaderTextColor.
     * @nullable
     */
    activeHeaderTextColor?: ThemeColor;
    /**
     * boxBorderColor.
     * @nullable
     */
    boxBorderColor?: ThemeColor;
    /**
     * deriveColors.
     * @nullable
     */
    deriveColors?: boolean;
    /**
     * headerTextColor.
     * @nullable
     */
    headerTextColor?: ThemeColor;
    /**
     * hoverHeaderBgColor.
     * @nullable
     */
    hoverHeaderBgColor?: ThemeColor;
    /**
     * hoverHeaderTextColor.
     * @nullable
     */
    hoverHeaderTextColor?: ThemeColor;
    /**
     * iconTextColor.
     * @nullable
     */
    iconTextColor?: ThemeColor;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeModulePickerConfig.build]] instead.
 */
export declare function createThemeModulePickerConfig(json: any): ThemeModulePickerConfig;
/**
 * ThemeModulePickerConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeModulePickerConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeModulePickerConfig.activeHeaderBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeHeaderBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.activeHeaderTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeHeaderTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.boxBorderColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boxBorderColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.deriveColors]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deriveColors: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.headerTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.hoverHeaderBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverHeaderBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.hoverHeaderTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverHeaderTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeModulePickerConfig.iconTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iconTextColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeModulePickerConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeModulePickerConfig;
}
//# sourceMappingURL=ThemeModulePickerConfig.d.ts.map