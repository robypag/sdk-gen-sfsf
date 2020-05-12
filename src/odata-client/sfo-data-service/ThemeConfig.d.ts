import { ThemeConfigRequestBuilder } from './ThemeConfigRequestBuilder';
import { GlobalThemeConfiguration, GlobalThemeConfigurationField } from './GlobalThemeConfiguration';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ThemeConfig" of service "SFOData".
 */
export declare class ThemeConfig extends Entity implements ThemeConfigType {
    /**
     * Technical entity name for ThemeConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * id.
     */
    id: string;
    /**
     * themeConfiguration.
     * @nullable
     */
    themeConfiguration?: GlobalThemeConfiguration;
    /**
     * Returns an entity builder to construct instances `ThemeConfig`.
     * @returns A builder that constructs instances of entity type `ThemeConfig`.
     */
    static builder(): EntityBuilderType<ThemeConfig, ThemeConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ThemeConfig` entity type.
     * @returns A `ThemeConfig` request builder.
     */
    static requestBuilder(): ThemeConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeConfig`.
     */
    static customField(fieldName: string): CustomField<ThemeConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ThemeConfigType {
    id: string;
    themeConfiguration?: GlobalThemeConfiguration;
}
export interface ThemeConfigTypeForceMandatory {
    id: string;
    themeConfiguration: GlobalThemeConfiguration;
}
export declare namespace ThemeConfig {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ThemeConfig>;
    /**
     * Static representation of the [[themeConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THEME_CONFIGURATION: GlobalThemeConfigurationField<ThemeConfig>;
    /**
     * All fields of the ThemeConfig entity.
     */
    const _allFields: Array<StringField<ThemeConfig> | GlobalThemeConfigurationField<ThemeConfig>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ThemeConfig>;
    /**
     * All key fields of the ThemeConfig entity.
     */
    const _keyFields: Array<Selectable<ThemeConfig>>;
    /**
     * Mapping of all key field names to the respective static field property ThemeConfig.
     */
    const _keys: {
        [keys: string]: Selectable<ThemeConfig>;
    };
}
//# sourceMappingURL=ThemeConfig.d.ts.map