import { EpCustomBackgroundPortletRequestBuilder } from './EpCustomBackgroundPortletRequestBuilder';
import { EpCustomBackgroundPortletProperty, EpCustomBackgroundPortletPropertyField } from './EpCustomBackgroundPortletProperty';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EPCustomBackgroundPortlet" of service "SFOData".
 */
export declare class EpCustomBackgroundPortlet extends Entity implements EpCustomBackgroundPortletType {
    /**
     * Technical entity name for EpCustomBackgroundPortlet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpCustomBackgroundPortlet.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: string;
    /**
     * backgroundPropertyLists.
     * @nullable
     */
    backgroundPropertyLists?: EpCustomBackgroundPortletProperty;
    /**
     * editable.
     * @nullable
     */
    editable?: boolean;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * viewable.
     * @nullable
     */
    viewable?: boolean;
    /**
     * Returns an entity builder to construct instances `EpCustomBackgroundPortlet`.
     * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
     */
    static builder(): EntityBuilderType<EpCustomBackgroundPortlet, EpCustomBackgroundPortletTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpCustomBackgroundPortlet` entity type.
     * @returns A `EpCustomBackgroundPortlet` request builder.
     */
    static requestBuilder(): EpCustomBackgroundPortletRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpCustomBackgroundPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
     */
    static customField(fieldName: string): CustomField<EpCustomBackgroundPortlet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EpCustomBackgroundPortletType {
    backgroundElementId: string;
    backgroundPropertyLists?: EpCustomBackgroundPortletProperty;
    editable?: boolean;
    userId?: string;
    viewable?: boolean;
}
export interface EpCustomBackgroundPortletTypeForceMandatory {
    backgroundElementId: string;
    backgroundPropertyLists: EpCustomBackgroundPortletProperty;
    editable: boolean;
    userId: string;
    viewable: boolean;
}
export declare namespace EpCustomBackgroundPortlet {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: StringField<EpCustomBackgroundPortlet>;
    /**
     * Static representation of the [[backgroundPropertyLists]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_PROPERTY_LISTS: EpCustomBackgroundPortletPropertyField<EpCustomBackgroundPortlet>;
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDITABLE: BooleanField<EpCustomBackgroundPortlet>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EpCustomBackgroundPortlet>;
    /**
     * Static representation of the [[viewable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEWABLE: BooleanField<EpCustomBackgroundPortlet>;
    /**
     * All fields of the EpCustomBackgroundPortlet entity.
     */
    const _allFields: Array<StringField<EpCustomBackgroundPortlet> | EpCustomBackgroundPortletPropertyField<EpCustomBackgroundPortlet> | BooleanField<EpCustomBackgroundPortlet>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpCustomBackgroundPortlet>;
    /**
     * All key fields of the EpCustomBackgroundPortlet entity.
     */
    const _keyFields: Array<Selectable<EpCustomBackgroundPortlet>>;
    /**
     * Mapping of all key field names to the respective static field property EpCustomBackgroundPortlet.
     */
    const _keys: {
        [keys: string]: Selectable<EpCustomBackgroundPortlet>;
    };
}
//# sourceMappingURL=EpCustomBackgroundPortlet.d.ts.map