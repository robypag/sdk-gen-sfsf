import { ThemeTemplateRequestBuilder } from './ThemeTemplateRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ThemeTemplate" of service "SFOData".
 */
export declare class ThemeTemplate extends Entity implements ThemeTemplateType {
    /**
     * Technical entity name for ThemeTemplate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeTemplate.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * bodyStyleClass.
     * @nullable
     */
    bodyStyleClass?: string;
    /**
     * footer.
     * @nullable
     */
    footer?: string;
    /**
     * header.
     * @nullable
     */
    header?: string;
    /**
     * id.
     */
    id: string;
    /**
     * langDir.
     * @nullable
     */
    langDir?: string;
    /**
     * locale.
     * @nullable
     */
    locale?: string;
    /**
     * scripts.
     * @nullable
     */
    scripts?: string;
    /**
     * styles.
     * @nullable
     */
    styles?: string;
    /**
     * template.
     * @nullable
     */
    template?: string;
    /**
     * ui5BaseThemeRootUrl.
     * @nullable
     */
    ui5BaseThemeRootUrl?: string;
    /**
     * Returns an entity builder to construct instances `ThemeTemplate`.
     * @returns A builder that constructs instances of entity type `ThemeTemplate`.
     */
    static builder(): EntityBuilderType<ThemeTemplate, ThemeTemplateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ThemeTemplate` entity type.
     * @returns A `ThemeTemplate` request builder.
     */
    static requestBuilder(): ThemeTemplateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeTemplate`.
     */
    static customField(fieldName: string): CustomField<ThemeTemplate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ThemeTemplateType {
    bodyStyleClass?: string;
    footer?: string;
    header?: string;
    id: string;
    langDir?: string;
    locale?: string;
    scripts?: string;
    styles?: string;
    template?: string;
    ui5BaseThemeRootUrl?: string;
}
export interface ThemeTemplateTypeForceMandatory {
    bodyStyleClass: string;
    footer: string;
    header: string;
    id: string;
    langDir: string;
    locale: string;
    scripts: string;
    styles: string;
    template: string;
    ui5BaseThemeRootUrl: string;
}
export declare namespace ThemeTemplate {
    /**
     * Static representation of the [[bodyStyleClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BODY_STYLE_CLASS: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[footer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[header]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[langDir]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANG_DIR: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[scripts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCRIPTS: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[styles]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STYLES: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[template]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE: StringField<ThemeTemplate>;
    /**
     * Static representation of the [[ui5BaseThemeRootUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UI_5_BASE_THEME_ROOT_URL: StringField<ThemeTemplate>;
    /**
     * All fields of the ThemeTemplate entity.
     */
    const _allFields: Array<StringField<ThemeTemplate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ThemeTemplate>;
    /**
     * All key fields of the ThemeTemplate entity.
     */
    const _keyFields: Array<Selectable<ThemeTemplate>>;
    /**
     * Mapping of all key field names to the respective static field property ThemeTemplate.
     */
    const _keys: {
        [keys: string]: Selectable<ThemeTemplate>;
    };
}
//# sourceMappingURL=ThemeTemplate.d.ts.map