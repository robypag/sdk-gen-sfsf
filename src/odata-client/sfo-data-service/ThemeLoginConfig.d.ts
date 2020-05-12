import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeLoginBackgroundConfig, ThemeLoginBackgroundConfigField } from './ThemeLoginBackgroundConfig';
import { ThemeLoginLogoConfig, ThemeLoginLogoConfigField } from './ThemeLoginLogoConfig';
import { ThemeButtonConfig, ThemeButtonConfigField } from './ThemeButtonConfig';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeLoginConfig
 */
export interface ThemeLoginConfig {
    /**
     * autofillBgColor.
     * @nullable
     */
    autofillBgColor?: ThemeColor;
    /**
     * background.
     * @nullable
     */
    background?: ThemeLoginBackgroundConfig;
    /**
     * footerScheme.
     * @nullable
     */
    footerScheme?: string;
    /**
     * logo.
     * @nullable
     */
    logo?: ThemeLoginLogoConfig;
    /**
     * primaryButton.
     * @nullable
     */
    primaryButton?: ThemeButtonConfig;
    /**
     * primaryButtonOption.
     * @nullable
     */
    primaryButtonOption?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeLoginConfig.build]] instead.
 */
export declare function createThemeLoginConfig(json: any): ThemeLoginConfig;
/**
 * ThemeLoginConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeLoginConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeLoginConfig.autofillBgColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    autofillBgColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[ThemeLoginConfig.background]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    background: ThemeLoginBackgroundConfigField<EntityT>;
    /**
     * Representation of the [[ThemeLoginConfig.footerScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    footerScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginConfig.logo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logo: ThemeLoginLogoConfigField<EntityT>;
    /**
     * Representation of the [[ThemeLoginConfig.primaryButton]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryButton: ThemeButtonConfigField<EntityT>;
    /**
     * Representation of the [[ThemeLoginConfig.primaryButtonOption]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryButtonOption: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ThemeLoginConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeLoginConfig;
}
//# sourceMappingURL=ThemeLoginConfig.d.ts.map