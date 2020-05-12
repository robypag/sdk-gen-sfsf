import { EpProfileUserInfoPortletRequestBuilder } from './EpProfileUserInfoPortletRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EPProfileUserInfoPortlet" of service "SFOData".
 */
export declare class EpProfileUserInfoPortlet extends Entity implements EpProfileUserInfoPortletType {
    /**
     * Technical entity name for EpProfileUserInfoPortlet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpProfileUserInfoPortlet.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * dashboard Id.
     */
    dashboardId: string;
    /**
     * is PII.
     * @nullable
     */
    isPii?: boolean;
    /**
     * is Writable.
     * @nullable
     */
    isWritable?: boolean;
    /**
     * portlet Id.
     */
    portletId: string;
    /**
     * standard Or UserInfo ElementId.
     * @nullable
     */
    standardOrUserInfoElementId?: string;
    /**
     * user Id.
     */
    userId: string;
    /**
     * Returns an entity builder to construct instances `EpProfileUserInfoPortlet`.
     * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
     */
    static builder(): EntityBuilderType<EpProfileUserInfoPortlet, EpProfileUserInfoPortletTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpProfileUserInfoPortlet` entity type.
     * @returns A `EpProfileUserInfoPortlet` request builder.
     */
    static requestBuilder(): EpProfileUserInfoPortletRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfileUserInfoPortlet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
     */
    static customField(fieldName: string): CustomField<EpProfileUserInfoPortlet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EpProfileUserInfoPortletType {
    dashboardId: string;
    isPii?: boolean;
    isWritable?: boolean;
    portletId: string;
    standardOrUserInfoElementId?: string;
    userId: string;
}
export interface EpProfileUserInfoPortletTypeForceMandatory {
    dashboardId: string;
    isPii: boolean;
    isWritable: boolean;
    portletId: string;
    standardOrUserInfoElementId: string;
    userId: string;
}
export declare namespace EpProfileUserInfoPortlet {
    /**
     * Static representation of the [[dashboardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DASHBOARD_ID: StringField<EpProfileUserInfoPortlet>;
    /**
     * Static representation of the [[isPii]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PII: BooleanField<EpProfileUserInfoPortlet>;
    /**
     * Static representation of the [[isWritable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_WRITABLE: BooleanField<EpProfileUserInfoPortlet>;
    /**
     * Static representation of the [[portletId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORTLET_ID: StringField<EpProfileUserInfoPortlet>;
    /**
     * Static representation of the [[standardOrUserInfoElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_OR_USER_INFO_ELEMENT_ID: StringField<EpProfileUserInfoPortlet>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EpProfileUserInfoPortlet>;
    /**
     * All fields of the EpProfileUserInfoPortlet entity.
     */
    const _allFields: Array<StringField<EpProfileUserInfoPortlet> | BooleanField<EpProfileUserInfoPortlet>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpProfileUserInfoPortlet>;
    /**
     * All key fields of the EpProfileUserInfoPortlet entity.
     */
    const _keyFields: Array<Selectable<EpProfileUserInfoPortlet>>;
    /**
     * Mapping of all key field names to the respective static field property EpProfileUserInfoPortlet.
     */
    const _keys: {
        [keys: string]: Selectable<EpProfileUserInfoPortlet>;
    };
}
//# sourceMappingURL=EpProfileUserInfoPortlet.d.ts.map