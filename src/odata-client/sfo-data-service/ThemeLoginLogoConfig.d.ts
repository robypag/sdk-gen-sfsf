import { ThemeUrl, ThemeUrlField } from './ThemeUrl';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ThemeLoginLogoConfig
 */
export interface ThemeLoginLogoConfig {
    /**
     * option.
     * @nullable
     */
    option?: string;
    /**
     * systemType.
     * @nullable
     */
    systemType?: string;
    /**
     * url.
     * @nullable
     */
    url?: ThemeUrl;
}
/**
 * @deprecated since v1.6.0. Use [[ThemeLoginLogoConfig.build]] instead.
 */
export declare function createThemeLoginLogoConfig(json: any): ThemeLoginLogoConfig;
/**
 * ThemeLoginLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ThemeLoginLogoConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ThemeLoginLogoConfig.option]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    option: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginLogoConfig.systemType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ThemeLoginLogoConfig.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ThemeUrlField<EntityT>;
}
export declare namespace ThemeLoginLogoConfig {
    function build(json: {
        [keys: string]: FieldType;
    }): ThemeLoginLogoConfig;
}
//# sourceMappingURL=ThemeLoginLogoConfig.d.ts.map