import { ThemeInfoRequestBuilder } from './ThemeInfoRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AccessibilityPreferences, AccessibilityPreferencesField } from './AccessibilityPreferences';
import { ThemeFingerprintsBean, ThemeFingerprintsBeanField } from './ThemeFingerprintsBean';
import { ThemeUrlsBean, ThemeUrlsBeanField } from './ThemeUrlsBean';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ThemeInfo" of service "SFOData".
 */
export declare class ThemeInfo extends Entity implements ThemeInfoType {
    /**
     * Technical entity name for ThemeInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ThemeInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * accessibilityPreferences.
     * @nullable
     */
    accessibilityPreferences?: AccessibilityPreferences;
    /**
     * fingerprints.
     * @nullable
     */
    fingerprints?: ThemeFingerprintsBean;
    /**
     * id.
     */
    id: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDate?: BigNumber;
    /**
     * locale.
     * @nullable
     */
    locale?: string;
    /**
     * modules.
     * @nullable
     */
    modules?: string;
    /**
     * ui5Theme.
     * @nullable
     */
    ui5Theme?: string;
    /**
     * urls.
     * @nullable
     */
    urls?: ThemeUrlsBean;
    /**
     * Returns an entity builder to construct instances `ThemeInfo`.
     * @returns A builder that constructs instances of entity type `ThemeInfo`.
     */
    static builder(): EntityBuilderType<ThemeInfo, ThemeInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ThemeInfo` entity type.
     * @returns A `ThemeInfo` request builder.
     */
    static requestBuilder(): ThemeInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ThemeInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ThemeInfo`.
     */
    static customField(fieldName: string): CustomField<ThemeInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ThemeInfoType {
    accessibilityPreferences?: AccessibilityPreferences;
    fingerprints?: ThemeFingerprintsBean;
    id: string;
    lastModifiedDate?: BigNumber;
    locale?: string;
    modules?: string;
    ui5Theme?: string;
    urls?: ThemeUrlsBean;
}
export interface ThemeInfoTypeForceMandatory {
    accessibilityPreferences: AccessibilityPreferences;
    fingerprints: ThemeFingerprintsBean;
    id: string;
    lastModifiedDate: BigNumber;
    locale: string;
    modules: string;
    ui5Theme: string;
    urls: ThemeUrlsBean;
}
export declare namespace ThemeInfo {
    /**
     * Static representation of the [[accessibilityPreferences]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCESSIBILITY_PREFERENCES: AccessibilityPreferencesField<ThemeInfo>;
    /**
     * Static representation of the [[fingerprints]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINGERPRINTS: ThemeFingerprintsBeanField<ThemeInfo>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ThemeInfo>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: BigNumberField<ThemeInfo>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<ThemeInfo>;
    /**
     * Static representation of the [[modules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULES: StringField<ThemeInfo>;
    /**
     * Static representation of the [[ui5Theme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UI_5_THEME: StringField<ThemeInfo>;
    /**
     * Static representation of the [[urls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URLS: ThemeUrlsBeanField<ThemeInfo>;
    /**
     * All fields of the ThemeInfo entity.
     */
    const _allFields: Array<AccessibilityPreferencesField<ThemeInfo> | ThemeFingerprintsBeanField<ThemeInfo> | StringField<ThemeInfo> | BigNumberField<ThemeInfo> | ThemeUrlsBeanField<ThemeInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ThemeInfo>;
    /**
     * All key fields of the ThemeInfo entity.
     */
    const _keyFields: Array<Selectable<ThemeInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ThemeInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ThemeInfo>;
    };
}
//# sourceMappingURL=ThemeInfo.d.ts.map