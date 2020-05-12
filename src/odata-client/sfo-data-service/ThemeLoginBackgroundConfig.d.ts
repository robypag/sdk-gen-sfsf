import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeLoginBackgroundConfig
 */
export interface ThemeLoginBackgroundConfig {
    /**
     * backgroundType.
     * @nullable
     */
    backgroundType?: string;
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
     * option.
     * @nullable
     */
    option?: string;
    /**
     * overlayOpacity.
     * @nullable
     */
    overlayOpacity?: number;
    /**
     * overlayOption.
     * @nullable
     */
    overlayOption?: string;
    /**
     * url.
     * @nullable
     */
    url?: ThemeUrl;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeLoginBackgroundConfig.build]] instead.
 */
export declare function createThemeLoginBackgroundConfig(json: any): ThemeLoginBackgroundConfig;
/**
 * ThemeLoginBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeLoginBackgroundConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.backgroundType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backgroundType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.baseColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.imageHorizontalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageHorizontalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.imageRepeat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageRepeat: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.imageVerticalPosition]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imageVerticalPosition: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.option]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    option: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.overlayOpacity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overlayOpacity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.overlayOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    overlayOption: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginBackgroundConfig.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ThemeUrlField<EntityT>;
}
export declare namespace ThemeLoginBackgroundConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeLoginBackgroundConfig;
}
//# sourceMappingURL=ThemeLoginBackgroundConfig.d.ts.map