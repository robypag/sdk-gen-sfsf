import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeTileConfig
 */
export interface ThemeTileConfig {
    /**
     * accentBodyBGColor.
     * @nullable
     */
    accentBodyBgColor?: ThemeColor;
    /**
     * accentBodyIconScheme.
     * @nullable
     */
    accentBodyIconScheme?: string;
    /**
     * accentBodyTextColor.
     * @nullable
     */
    accentBodyTextColor?: ThemeColor;
    /**
     * accentHeaderBGColor.
     * @nullable
     */
    accentHeaderBgColor?: ThemeColor;
    /**
     * accentHeaderIconScheme.
     * @nullable
     */
    accentHeaderIconScheme?: string;
    /**
     * accentHeaderLinkColor.
     * @nullable
     */
    accentHeaderLinkColor?: ThemeColor;
    /**
     * accentHeaderTextColor.
     * @nullable
     */
    accentHeaderTextColor?: ThemeColor;
    /**
     * accentLinkColor.
     * @nullable
     */
    accentLinkColor?: ThemeColor;
    /**
     * alertBadgeBGColor.
     * @nullable
     */
    alertBadgeBgColor?: ThemeColor;
    /**
     * alertBadgeTextColor.
     * @nullable
     */
    alertBadgeTextColor?: ThemeColor;
    /**
     * alertTextColor.
     * @nullable
     */
    alertTextColor?: ThemeColor;
    /**
     * bodyBGColor.
     * @nullable
     */
    bodyBgColor?: ThemeColor;
    /**
     * bodyIconScheme.
     * @nullable
     */
    bodyIconScheme?: string;
    /**
     * bodyTextColor.
     * @nullable
     */
    bodyTextColor?: ThemeColor;
    /**
     * headerBGColor.
     * @nullable
     */
    headerBgColor?: ThemeColor;
    /**
     * headerIconScheme.
     * @nullable
     */
    headerIconScheme?: string;
    /**
     * headerLinkColor.
     * @nullable
     */
    headerLinkColor?: ThemeColor;
    /**
     * headerTextColor.
     * @nullable
     */
    headerTextColor?: ThemeColor;
    /**
     * linkColor.
     * @nullable
     */
    linkColor?: ThemeColor;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeTileConfig.build]] instead.
 */
export declare function createThemeTileConfig(json: any): ThemeTileConfig;
/**
 * ThemeTileConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeTileConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeTileConfig.accentBodyBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentBodyBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentBodyIconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentBodyIconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentBodyTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentBodyTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentHeaderBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentHeaderBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentHeaderIconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentHeaderIconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentHeaderLinkColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentHeaderLinkColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentHeaderTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentHeaderTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.accentLinkColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentLinkColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.alertBadgeBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertBadgeBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.alertBadgeTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertBadgeTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.alertTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    alertTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.bodyBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bodyBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.bodyIconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bodyIconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.bodyTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bodyTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.headerBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.headerIconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerIconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.headerLinkColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerLinkColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.headerTextColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerTextColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeTileConfig.linkColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkColor: ThemeColorField<EntityT>;
}
export declare namespace ThemeTileConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeTileConfig;
}
//# sourceMappingURL=ThemeTileConfig.d.ts.map