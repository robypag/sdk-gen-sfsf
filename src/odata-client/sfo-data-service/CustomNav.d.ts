import { CustomNavRequestBuilder } from './CustomNavRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CustomNav" of service "SFOData".
 */
export declare class CustomNav extends Entity implements CustomNavType {
    /**
     * Technical entity name for CustomNav.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomNav.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * altText.
     * @nullable
     */
    altText?: string;
    /**
     * alwaysShow.
     * @nullable
     */
    alwaysShow?: boolean;
    /**
     * isModule.
     * @nullable
     */
    isModule?: boolean;
    /**
     * isSelected.
     * @nullable
     */
    isSelected?: boolean;
    /**
     * label.
     * @nullable
     */
    label?: string;
    /**
     * newWindow.
     * @nullable
     */
    newWindow?: boolean;
    /**
     * title.
     */
    title: string;
    /**
     * url.
     * @nullable
     */
    url?: string;
    /**
     * Returns an entity builder to construct instances `CustomNav`.
     * @returns A builder that constructs instances of entity type `CustomNav`.
     */
    static builder(): EntityBuilderType<CustomNav, CustomNavTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomNav` entity type.
     * @returns A `CustomNav` request builder.
     */
    static requestBuilder(): CustomNavRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomNav`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomNav`.
     */
    static customField(fieldName: string): CustomField<CustomNav>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomNavType {
    altText?: string;
    alwaysShow?: boolean;
    isModule?: boolean;
    isSelected?: boolean;
    label?: string;
    newWindow?: boolean;
    title: string;
    url?: string;
}
export interface CustomNavTypeForceMandatory {
    altText: string;
    alwaysShow: boolean;
    isModule: boolean;
    isSelected: boolean;
    label: string;
    newWindow: boolean;
    title: string;
    url: string;
}
export declare namespace CustomNav {
    /**
     * Static representation of the [[altText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALT_TEXT: StringField<CustomNav>;
    /**
     * Static representation of the [[alwaysShow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALWAYS_SHOW: BooleanField<CustomNav>;
    /**
     * Static representation of the [[isModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MODULE: BooleanField<CustomNav>;
    /**
     * Static representation of the [[isSelected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SELECTED: BooleanField<CustomNav>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<CustomNav>;
    /**
     * Static representation of the [[newWindow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_WINDOW: BooleanField<CustomNav>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<CustomNav>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<CustomNav>;
    /**
     * All fields of the CustomNav entity.
     */
    const _allFields: Array<StringField<CustomNav> | BooleanField<CustomNav>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomNav>;
    /**
     * All key fields of the CustomNav entity.
     */
    const _keyFields: Array<Selectable<CustomNav>>;
    /**
     * Mapping of all key field names to the respective static field property CustomNav.
     */
    const _keys: {
        [keys: string]: Selectable<CustomNav>;
    };
}
//# sourceMappingURL=CustomNav.d.ts.map