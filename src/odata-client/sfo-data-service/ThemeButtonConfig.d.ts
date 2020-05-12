import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeButtonConfig
 */
export interface ThemeButtonConfig {
    /**
     * bgColor.
     * @nullable
     */
    bgColor?: ThemeColor;
    /**
     * borderColor.
     * @nullable
     */
    borderColor?: ThemeColor;
    /**
     * borderWidth.
     * @nullable
     */
    borderWidth?: string;
    /**
     * disabledBgColor.
     * @nullable
     */
    disabledBgColor?: ThemeColor;
    /**
     * disabledBorderColor.
     * @nullable
     */
    disabledBorderColor?: ThemeColor;
    /**
     * disabledTextColor.
     * @nullable
     */
    disabledTextColor?: ThemeColor;
    /**
     * hoverBgColor.
     * @nullable
     */
    hoverBgColor?: ThemeColor;
    /**
     * hoverBorderColor.
     * @nullable
     */
    hoverBorderColor?: ThemeColor;
    /**
     * hoverTextColor.
     * @nullable
     */
    hoverTextColor?: ThemeColor;
    /**
     * textColor.
     * @nullable
     */
    textColor?: ThemeColor;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeButtonConfig.build]] instead.
 */
export declare function createThemeButtonConfig(json: any): ThemeButtonConfig;
/**
 * ThemeButtonConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeButtonConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeButtonConfig.bgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.borderColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.borderWidth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderWidth: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.disabledBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    disabledBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.disabledBorderColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    disabledBorderColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.disabledTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    disabledTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.hoverBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.hoverBorderColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverBorderColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.hoverTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hoverTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeButtonConfig.textColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeButtonConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeButtonConfig;
}
//# sourceMappingURL=ThemeButtonConfig.d.ts.map